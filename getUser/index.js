const DB = require('./dynamodb');
const CONSTANTS = require('./constant');
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
                        throw new Error(CONSTANTS.VALIDATION_MESSAGES.INVALID_USER_ID);
                }
        } catch (error) {
                throw error;
        }
}