
const { DynamoDBClient } = require('@aws-sdk/client-dynamodb');
const CONSTANTS = require('./constant');
const { DynamoDBDocumentClient, ScanCommand } = require('@aws-sdk/lib-dynamodb');
const dbclient = new DynamoDBClient();

const marshallOptions = {
    convertEmptyValues: CONSTANTS.FALSE,
    removeUndefinedValues: CONSTANTS.TRUE,
    convertClassInstanceToMap: CONSTANTS.FALSE
};

const unmarshallOptions = {
    wrapNumbers: CONSTANTS.FALSE
};

const translateConfig = { marshallOptions, unmarshallOptions };
const dbClient = DynamoDBDocumentClient.from(dbclient, translateConfig);
const scanUserTable = async (search=null,nextPaginationKey) => {
	let items = [];
	const params = {
		TableName: CONSTANTS.USER_TABLE
	};
	if(search) {
		params['FilterExpression'] = 'assignedDoctor = :value'
		params['ExpressionAttributeValues'] = {
			':value': search,
		}
	}
	if (typeof nextPaginationKey !== 'undefined') {
		params.ExclusiveStartKey = nextPaginationKey;
	}

	const { LastEvaluatedKey, Items } = await dbClient.send(new ScanCommand(params));
	items = items.concat(Items);
	if (LastEvaluatedKey) {
		const data = await scanUserTable(search=null,LastEvaluatedKey);
		items = items.concat(data);
	}
	return items;
};
exports.scanUserTable = scanUserTable;