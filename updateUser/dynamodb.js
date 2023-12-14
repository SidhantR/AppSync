const CONSTANTS = require('./constant');
const { DynamoDBClient } = require('@aws-sdk/client-dynamodb');
const { DynamoDBDocumentClient, UpdateCommand} = require('@aws-sdk/lib-dynamodb');
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
const updateUser = async (userId,updateUser) => {
	const params = {
		TableName: CONSTANTS.USER_TABLE,
		Key: {
			userId: userId
		},
		UpdateExpression: 'SET email = :email, username = :username, address = :address, processStatus = :processStatus, assignedDoctor = :assignedDoctor, hospital = :hospital',
		ExpressionAttributeValues: {
			':email': updateUser.email,
            ':username': updateUser.username,
            ':address': updateUser.address,
            ':processStatus': updateUser.processStatus,
            ':assignedDoctor': updateUser.assignedDoctor,
            ':hospital': updateUser.hospital

		},
		ReturnValues: 'UPDATED_NEW'
	};
    console.log('update params', params);
	return dbClient.send(new UpdateCommand(params));
};
exports.updateUser = updateUser;