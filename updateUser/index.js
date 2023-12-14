const DB = require('./dynamodb');
const CONSTANTS = require('./constant');
exports.handler = async (query) => {
    try {
        const userId = query.arguments.input.userId;
        if(userId) {
        const obj = query.arguments.input;
        await DB.updateUser(userId,obj);
        return obj;
        } else {
            throw new Error('Invalid UserId');
        }
    } catch (error) {
        throw error;
    }
}