const { DynamoDBClient } = require('@aws-sdk/client-dynamodb');
const CONSTANTS = require('./constant');
const { DynamoDBDocumentClient, PutCommand, QueryCommand, UpdateCommand } = require('@aws-sdk/lib-dynamodb');
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

exports.putData = async (params) => {
    return await dbClient.send(new PutCommand(params))
}

exports.queryData = async (params) => {
    return await dbClient.send(new QueryCommand(params));
}

exports.deleteData = async (params) => {
    return await dbClient.send(new DeleteCommand(params));
}

exports.updateData = async (params) => {
    return dbClient.send(new UpdateCommand(params))
}