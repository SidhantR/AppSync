const DB = require('./dynamodb');
const CONSTANTS = require('./constant');
const { GraphQLError } = require('graphql');
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
                        throw new GraphQLError(CONSTANTS.ERRORS.USER_ID_REQUIRED.MESSAGE, {
                                extensions: {
                                  code: CONSTANTS.ERRORS.USER_ID_REQUIRED.CODE,
                                },
                              });
                }
        } catch (error) {
                throw error;
        }
}