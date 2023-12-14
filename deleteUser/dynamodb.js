const CONSTANTS = require('./constant');
const { DynamoDBClient } = require('@aws-sdk/client-dynamodb');
const { DynamoDBDocumentClient, DeleteCommand} = require('@aws-sdk/lib-dynamodb');
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
const deleteUser = async (userId) => {
	const params = {
		TableName: CONSTANTS.USER_TABLE,
		Key: {
			userId: userId,
		}
	};
	const command = new DeleteCommand(params);
	await dbClient.send(command);
};
exports.deleteUser = deleteUser;