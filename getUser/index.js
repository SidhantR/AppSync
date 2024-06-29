const DB = require('./dynamodb');
const CONSTANTS = require('./constant');
const utils = require('utils')

exports.handler = async (query) => {
        try {
                const userId = query.arguments.userId;
                if (userId) {
                        const userData = await DB.getUserData(userId);
                        if (userData) {
                                return userData;
                        } else {
                                return;
                        }
                } else {
                        utils.graphQlError(CONSTANTS.ERRORS.USER_ID_REQUIRED)
                }
        } catch (error) {
                throw error;
        }
}