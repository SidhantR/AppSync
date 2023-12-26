const CONSTANTS = require('./constant');
const { DynamoDBClient } = require('@aws-sdk/client-dynamodb');
const { GraphQLError } = require('graphql');
const { DynamoDBDocumentClient, UpdateCommand, QueryCommand} = require('@aws-sdk/lib-dynamodb');
const dbclient = new DynamoDBClient();

const marshallOptions = {
    convertEmptyValues: CONSTANTS.FALSE,
    removeUndefinedValues: CONSTANTS.TRUE,
    convertClassInstanceToMap: CONSTANTS.FALSE
};

const unmarshallOptions = {
    wrapNumbers: CONSTANTS.FALSE
};

const translateConfig = { marshallOptions, unmarshallOptions };
const dbClient = DynamoDBDocumentClient.from(dbclient, translateConfig);
const updateUser = async (updateUser) => {
	const params = {
		TableName: CONSTANTS.USER_TABLE,
		Key: {
			pk:CONSTANTS.USER,
			sk: updateUser.userId
		},
		UpdateExpression: 'SET sk1 = :email, email = :email, sk4 = :username, username = :username, address = :address, processStatus = :processStatus, sk2 = :assignedDoctor, assignedDoctor = :assignedDoctor, sk3 = :hospital, hospital = :hospital',
		ExpressionAttributeValues: {
			':email': updateUser.email,
            ':username': updateUser.username,
            ':address': updateUser.address,
            ':processStatus': updateUser.processStatus,
            ':assignedDoctor': updateUser.assignedDoctor,
            ':hospital': updateUser.hospital

		},
		ReturnValues: 'UPDATED_NEW'
	};
    console.log('update params', params);
	return dbClient.send(new UpdateCommand(params));
};
const getUserById = async (userID) => {
    const params = {
        TableName: CONSTANTS.USER_TABLE,
        KeyConditionExpression: '#pk = :pk AND #sk = :sk',
        ExpressionAttributeValues: {
            ':sk': userID,
            ':pk': 'user'
        },
        ExpressionAttributeNames: {
            '#pk':'pk',
            '#sk': 'sk'
        }
    };
    const { Items } = await dbClient.send(new QueryCommand(params));
    if (Items && Items.length === CONSTANTS.ZERO) {
        return CONSTANTS.FALSE;
    } else {
        return Items[0];
    }
};
const getUserData = async (userEmail,userId) => {
	let checkUser = await getUserById(userId);
	if(checkUser) {
    const params = {
        TableName: CONSTANTS.USER_TABLE,
        IndexName: 'sk1-index',
        KeyConditionExpression: '#pk = :pk AND #email = :email',
        ExpressionAttributeValues: {
            ':email': userEmail,
            ':pk': CONSTANTS.USER
        },
        ExpressionAttributeNames: {
			'#email': 'sk1',
			'#pk': 'pk'
        }
    };
    const { Items } = await dbClient.send(new QueryCommand(params));
    if (Items && Items.length === CONSTANTS.ZERO) {
        return CONSTANTS.FALSE;
    } else {
		if(checkUser.email!=userEmail) {
		throw new GraphQLError(CONSTANTS.ERRORS.USER_EXIST.MESSAGE, {
            extensions: {
              code: CONSTANTS.ERRORS.USER_EXIST.CODE,
            }
        });
	}
    }
} else {
	throw new GraphQLError(CONSTANTS.ERRORS.USER_NOT_EXIST.MESSAGE, {
		extensions: {
		  code: CONSTANTS.ERRORS.USER_NOT_EXIST.CODE,
		}
	});
}
};
exports.updateUser = updateUser;
exports.getUserData = getUserData;