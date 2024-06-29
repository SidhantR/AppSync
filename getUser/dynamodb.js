const CONSTANTS = require('./constant');
const utils = require('utils')

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
    const { Items } = await utils.queryData(params);
    if (Items && Items.length === CONSTANTS.ZERO) {
        return CONSTANTS.FALSE;
    } else {
        return Items[0];
    }
};
