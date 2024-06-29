const DB = require('./dynamodb');
const CONSTANTS = require('./constant');
const Validation = require('./validateInput');
exports.handler = async (query) => {
    try {
        const obj = query.arguments.input;
        obj.pk = CONSTANTS.USER
        obj.userId = obj.userId;
        Validation.validateData(obj);
        obj.sk =  obj.userId;
        obj.sk1 = obj.email;
        obj.sk2 = obj.assignedDoctor;
        obj.sk3 = obj.hospital;
        obj.sk4 = obj.username;
        await DB.getUserData(obj.email,obj.userId);
        await DB.updateUser(obj);
        return obj;
    } catch (error) {
        throw error;
    }
}