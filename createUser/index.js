const DB = require('./dynamodb');
const CONSTANTS = require('./constant');
const { GraphQLError } = require('graphql');
const Validation = require('./validateInput');
exports.handler = async (query) => {
    try {
        const obj = query.arguments.input;
        obj.userId = Date.now().toString();
        Validation.validateData(obj);

        await DB.saveUpdateItem(obj, CONSTANTS.USER_TABLE);
        return obj;
    } catch (error) {
        throw error;
    }
}