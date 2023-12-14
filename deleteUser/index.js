const DB = require('./dynamodb');
const CONSTANTS = require('./constant');
exports.handler = async (query) => {
    try {
        const userId = query.arguments.input.userId;
        if(userId)
        {
        await DB.deleteUser(userId);
        return { message: 'Successfully Deleted' }
        } else {
            return { message: 'Invalid UserId' }
        }
    } catch (error) {
        throw error;
    }
}