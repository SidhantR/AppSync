exports.handler = async (query) => {
    const {
        arguments : {
        input : { username, email }
        }
    } = JSON.parse(query);
    return [{
        userId: Date.now().toString(),
        username: username,
        email: email
    }]
}