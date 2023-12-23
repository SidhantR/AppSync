
const { DynamoDBClient } = require('@aws-sdk/client-dynamodb');
const CONSTANTS = require('./constant');
const { GraphQLError } = require('graphql');
const { DynamoDBDocumentClient, PutCommand, QueryCommand } = require('@aws-sdk/lib-dynamodb');
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
exports.saveUpdateItem = async (Item, table) => {
	try {
		const params = {
			TableName: table,
			Item: Item
		};
		return dbClient.send(new PutCommand(params));
	} catch (error) {
        console.log('db err',error);
		return error;
	}
};
exports.getUserData = async (userEmail) => {
    const params = {
        TableName: CONSTANTS.USER_TABLE,
        IndexName: 'sk1-index',
        KeyConditionExpression: '#pk = :pk AND #email = :email',
        ExpressionAttributeValues: {
            ':email': userEmail,
            ':pk': 'pk#user'
        },
        ExpressionAttributeNames: {
			'#email': 'sk1',
			'#pk': 'pk'
        }
    };
    const { Items } = await dbClient.send(new QueryCommand(params));
    if (Items && Items.length === CONSTANTS.ZERO) {
        return CONSTANTS.FALSE;
    } else {
		throw new GraphQLError(CONSTANTS.ERRORS.USER_EXIST.MESSAGE, {
            extensions: {
              code: CONSTANTS.ERRORS.USER_EXIST.CODE,
            }
        });
    }
};