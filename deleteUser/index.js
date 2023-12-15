const DB = require('./dynamodb');
const CONSTANTS = require('./constant');
const { GraphQLError } = require('graphql');
exports.handler = async (query) => {
    try {
        const userId = query.arguments.input.userId;
        if(userId)
        {
        await DB.deleteUser(userId);
        return { message: 'Successfully Deleted' }
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