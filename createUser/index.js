exports.handler = async (query) => {
    console.log('query data', query);
    const {
        arguments : {
            input : { username, email }
        }
    } = query;
    return [{
        userId: Date.now().toString(),
        username: username,
        email: email
    }]
}