exports.handler = async (query) => {
const userId = query.arguments.input.userId;
    return {
        userId: userId,
        username: "test user",
        email: "test.user@yopmail.com"
    }
}