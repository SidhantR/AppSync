const DB = require('./dynamodb');
exports.handler = async (query) => {
    try {
        const search = query.arguments.assignedDoctor;
        const userData = await DB.getAllUserData(search);
        return userData;
    } catch (error) {
        throw error;
    }
}