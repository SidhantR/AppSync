exports.handler = async (query) => {
const email = query.arguments.input.email;
    return [{
        userId: Date.now().toString(),
        username: username,
        email: email
    }]
}