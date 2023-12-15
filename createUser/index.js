const DB = require('./dynamodb');
const CONSTANTS = require('./constant');
const { GraphQLError } = require('graphql');
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
            throw new GraphQLError(CONSTANTS.ERRORS.INVALID_EMAIL.MESSAGE, {
                extensions: {
                  code: CONSTANTS.ERRORS.INVALID_EMAIL.CODE,
                },
            });
        }
    } catch (error) {
        throw error;
    }
}