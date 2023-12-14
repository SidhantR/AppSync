const DB = require('./dynamodb');
const CONSTANTS = require('./constant');
exports.handler = async (query) => {
    try {
        const userData = await DB.scanUserTable();
        return userData;
    } catch (error) {
        throw error;
    }
}