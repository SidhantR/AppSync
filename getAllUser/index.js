const DB = require('./dynamodb');
const CONSTANTS = require('./constant');
exports.handler = async (query) => {
    try {
        const search = query.arguments.assignedDoctor;
        const userData = await DB.scanUserTable(search);
        return userData;
    } catch (error) {
        throw error;
    }
}