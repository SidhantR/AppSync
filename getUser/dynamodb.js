
const { DynamoDBClient } = require('@aws-sdk/client-dynamodb');
const CONSTANTS = require('./constant');
const { DynamoDBDocumentClient, QueryCommand } = require('@aws-sdk/lib-dynamodb');
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
exports.getUserData = async (userID) => {
    const params = {
        TableName: CONSTANTS.USER_TABLE,
        KeyConditionExpression: '#uid = :id',
        ExpressionAttributeValues: {
            ':id': userID
        },
        ExpressionAttributeNames: {
            '#uid': 'userId'
        }
    };
    const { Items } = await dbClient.send(new QueryCommand(params));
    if (Items.length === CONSTANTS.ZERO) {
        return CONSTANTS.FALSE;
    } else {
        return Items;
    }
};
