const DB = require('./dynamodb');
exports.handler = async (query) => {
    try {
        const email = query.arguments.input.email;
        const userName = query.arguments.input.username;
        let obj = {
            userId: Date.now().toString(),
            username: userName,
            email: email
        }
        let dbdata = await DB.saveUpdateItem(obj, 'dev-UserTable');
        console.log('db dasta',dbdata);
        return obj;
    } catch (error) {
        throw error;
    }
}