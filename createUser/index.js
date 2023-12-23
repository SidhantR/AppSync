const DB = require('./dynamodb');
const CONSTANTS = require('./constant');
const { GraphQLError } = require('graphql');
const Validation = require('./validateInput');
exports.handler = async (query) => {
    try {
        const obj = query.arguments.input;
        obj.pk = 'pk#user'
        obj.userId = obj.userId || Date.now().toString();
        Validation.validateData(obj);
        obj.sk =  obj.userId;
        obj.sk1 = obj.email;
        obj.sk2 = obj.assignedDoctor;
        obj.sk3 = obj.hospital;
        obj.sk4 = obj.username;
        await DB.getUserData(obj.email);
        await DB.saveUpdateItem(obj, CONSTANTS.USER_TABLE);
        return obj;
    } catch (error) {
        throw error;
    }
}