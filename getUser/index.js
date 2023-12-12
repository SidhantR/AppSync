exports.handler = async (query) => {
    console.log('query by id', query);
    const {
        arguments : {
        input : { userId }
        }
    } = query;
    return {
        userId: userId,
        username: "Test User",
        email: "test.user@yopmail.com"
    }
}