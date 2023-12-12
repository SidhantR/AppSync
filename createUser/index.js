exports.handler = async (query) => {
    console.log('query data', query);
    const {
        arguments : {
            input : { name }
        },
        arguments : {
            input : { email }
        },
        identity :  { sub }
    } = query;
    return [{
        userId: Date.now().toString(),
        username: name,
        email: email
    }]
}