
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
        KeyConditionExpression: '#pk = :pk AND #sk = :sk',
        ExpressionAttributeValues: {
            ':sk': userID,
            ':pk': CONSTANTS.USER
        },
        ExpressionAttributeNames: {
            '#pk':'pk',
            '#sk': 'sk'
        }
    };
    const { Items } = await dbClient.send(new QueryCommand(params));
    if (Items && Items.length === CONSTANTS.ZERO) {
        return CONSTANTS.FALSE;
    } else {
        return Items[0];
    }
};
