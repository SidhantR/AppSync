exports.handler = async (parent, query) => {
    console.log('query by id', query);
    return {
        userId: "1",
        username: "Test User",
        email: "test.user@yopmail.com"
    }
}