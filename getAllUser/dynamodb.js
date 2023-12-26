const CONSTANTS = require('./constant');
const utils = require('utils')

const getAllUserData = async (search=null,nextPaginationKey) => {
	let items = [];
    const params = {
        TableName: CONSTANTS.USER_TABLE,
        KeyConditionExpression: '#pk = :pk',
        ExpressionAttributeValues: {
            ':pk': CONSTANTS.USER
        },
        ExpressionAttributeNames: {
			'#pk': 'pk'
        }
    };
    if(search) {
		params['IndexName'] = 'sk2-index'
		params['ExpressionAttributeNames']['#sk2'] = 'sk2'
		params['ExpressionAttributeValues'][':sk2'] = search,
		 params['KeyConditionExpression']= '#pk = :pk AND #sk2 = :sk2'
	}
	if (typeof nextPaginationKey !== 'undefined') {
		params.ExclusiveStartKey = nextPaginationKey;
	}
    const {LastEvaluatedKey, Items } = await utils.queryData(params);
	items = items.concat(Items);
	if (LastEvaluatedKey) {
		const data = await getAllUserData(search=null,LastEvaluatedKey);
		items = items.concat(data);
	}
	return items;
};
exports.getAllUserData = getAllUserData;