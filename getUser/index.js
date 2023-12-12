exports.handler = async (query) => {
    console.log('type of data',typeof query);
    const {
        arguments : {
        input : { userId }
        }
    } = JSON.parse(query);
    return {
        userId: userId,
        username: "Test User",
        email: "test.user@yopmail.com"
    }
}