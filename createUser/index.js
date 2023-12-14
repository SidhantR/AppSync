const DB = require('./dynamodb');
const CONSTANTS = require('./constant');
exports.handler = async (query) => {
    try {
        const { email, username, address, assignedDoctor, hospital, processStatus } = query.arguments.input;
        if (email && CONSTANTS.EMAIL_REGEX.test(email)) {
            let obj = {
                userId: Date.now().toString(),
                username: username,
                email: email,
                address: address,
                assignedDoctor: assignedDoctor,
                hospital: hospital,
                processStatus: processStatus
            }
            await DB.saveUpdateItem(obj, CONSTANTS.USER_TABLE);
            return obj;
        }
        else {
            throw new Error(CONSTANTS.VALIDATION_MESSAGES.INVALID_EMAIL);
        }
    } catch (error) {
        throw error;
    }
}