const DB = require('./dynamodb');
const CONSTANTS = require('./constant');
exports.handler = async (query) => {
    try {
        const userId = query.arguments.input.userId;
        await DB.deleteUser(userId);
        return { message: 'Successfully Deleted' }
    } catch (error) {
        throw error;
    }
}