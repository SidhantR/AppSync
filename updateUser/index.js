const DB = require('./dynamodb');
const CONSTANTS = require('./constant');
exports.handler = async (query) => {
    try {
        const userId = query.arguments.input.userId;
        const obj = query.arguments.input;
        await DB.updateUser(userId,obj);
        return obj;
    } catch (error) {
        throw error;
    }
}