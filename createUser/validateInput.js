const CONSTANTS = require('./constant');
const { GraphQLError } = require('graphql');
exports.validateData = (data)=>{
    if(!data.userId || !data.userId.trim()) {
        throw new GraphQLError(CONSTANTS.ERRORS.USER_ID_REQUIRED.MESSAGE, {
            extensions: {
              code: CONSTANTS.ERRORS.USER_ID_REQUIRED.CODE,
            },
        });
    } else if(!data.email || !data.email.trim() || !CONSTANTS.EMAIL_REGEX.test(data.email)) {
        throw new GraphQLError(CONSTANTS.ERRORS.INVALID_EMAIL.MESSAGE, {
            extensions: {
              code: CONSTANTS.ERRORS.INVALID_EMAIL.CODE,
            }
        });
    } else if(!data.username || !data.username.trim()) {
        throw new GraphQLError(CONSTANTS.ERRORS.INVALID_USER.MESSAGE, {
            extensions: {
              code: CONSTANTS.ERRORS.INVALID_USER.CODE,
            }
        });
    } else if(!data.address || !data.address.trim()) {
        throw new GraphQLError(CONSTANTS.ERRORS.INVALID_ADDRESS.MESSAGE, {
            extensions: {
              code: CONSTANTS.ERRORS.INVALID_ADDRESS.CODE,
            }
        });
    } else if(!data.processStatus || !data.processStatus.trim()) {
        throw new GraphQLError(CONSTANTS.ERRORS.INVALID_PROCESS_STATUS.MESSAGE, {
            extensions: {
              code: CONSTANTS.ERRORS.INVALID_PROCESS_STATUS.CODE,
            }
        });
    } else if(!data.assignedDoctor || !data.assignedDoctor.trim()) {
        throw new GraphQLError(CONSTANTS.ERRORS.INVALID_DOCTOR.MESSAGE, {
            extensions: {
              code: CONSTANTS.ERRORS.INVALID_DOCTOR.CODE,
            }
        });
    } else if(!data.hospital || !data.hospital.trim()) {
        throw new GraphQLError(CONSTANTS.ERRORS.INVALID_HOSPITAL.MESSAGE, {
            extensions: {
              code: CONSTANTS.ERRORS.INVALID_HOSPITAL.CODE,
            }
        });
    } else if(data.username.length > CONSTANTS.MAX || data.username.length < CONSTANTS.MIN) {
        throw new GraphQLError(CONSTANTS.ERRORS.INVALID_USER_NAME_LENGTH.MESSAGE, {
            extensions: {
              code: CONSTANTS.ERRORS.INVALID_USER_NAME_LENGTH.CODE,
            }
        });
    }

}