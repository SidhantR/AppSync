
const { DynamoDBClient } = require('@aws-sdk/client-dynamodb');
const CONSTANTS = require('./constant');
const { DynamoDBDocumentClient, PutCommand, UpdateCommand } = require('@aws-sdk/lib-dynamodb');
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