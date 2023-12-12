exports.handler = async (query) => {
const userName = query.arguments.input.username;
const email = query.arguments.input.email;
    return {
        userId: Date.now().toString(),
        username: userName,
        email: email
    }
}