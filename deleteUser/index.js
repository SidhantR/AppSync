const DB = require('./dynamodb');
const CONSTANTS = require('./constant');
const utils = require('utils');

exports.handler = async (query) => {
    try {
        const userId = query.arguments.input.userId;
        if(userId)
        {
        await DB.deleteUser(userId);
        return { message: 'Successfully Deleted' }
        } else {
            utils.graphQlError(CONSTANTS.ERRORS.USER_ID_REQUIRED)
        }
    } catch (error) {
        throw error;
    }
}