const CONSTANTS = require('./constant');
const utils = require('utils')

const deleteUser = async (userId) => {
	const params = {
		TableName: CONSTANTS.USER_TABLE,
		Key: {
			pk:CONSTANTS.USER,
			sk: userId
		}
	};
	await utils.deleteData(params)
};
exports.deleteUser = deleteUser;