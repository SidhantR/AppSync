const DB = require('./dynamodb');
const CONSTANTS = require('./constant');
const { GraphQLError } = require('graphql');
const Validation = require('./validateInput');
exports.handler = async (query) => {
    try {
        const obj = query.arguments.input;
        await Validation.validateData(obj);
        await DB.updateUser(obj);
        return obj;
    } catch (error) {
        throw error;
    }
}