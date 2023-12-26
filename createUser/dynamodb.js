const CONSTANTS = require('./constant');
const utils = require('utils')

exports.saveUpdateItem = async (Item, table) => {
	try {
		const params = {
			TableName: table,
			Item: Item
		};
        return utils.putData(params)
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
            ':pk': CONSTANTS.USER
        },
        ExpressionAttributeNames: {
			'#email': 'sk1',
			'#pk': 'pk'
        }
    };
    const { Items } = await utils.queryData(params);
    if (Items && Items.length === CONSTANTS.ZERO) {
        return CONSTANTS.FALSE;
    } else {
        utils.graphQlError(CONSTANTS.ERRORS.USER_EXIST)
    }
};