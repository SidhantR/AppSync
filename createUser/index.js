exports.handler = async (query) => {
const email = query.arguments.input.email;
const userName = query.arguments.input.username;
return {
        userId: Date.now().toString(),
        username: userName,
        email: email
    }
}