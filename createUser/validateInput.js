const CONSTANTS = require('./constant');
const { GraphQLError } = require('graphql');
exports.validateData = (data)=>{
    if(!data.userId) {
        throw new GraphQLError(CONSTANTS.ERRORS.USER_ID_REQUIRED.MESSAGE, {
            extensions: {
              code: CONSTANTS.ERRORS.USER_ID_REQUIRED.CODE,
            },
        });
    } else if(!data.email || !CONSTANTS.EMAIL_REGEX.test(data.email)) {
        throw new GraphQLError(CONSTANTS.ERRORS.INVALID_EMAIL.MESSAGE, {
            extensions: {
              code: CONSTANTS.ERRORS.INVALID_EMAIL.CODE,
            }
        });
    } else if(!data.username) {
        throw new GraphQLError(CONSTANTS.ERRORS.INVALID_USER.MESSAGE, {
            extensions: {
              code: CONSTANTS.ERRORS.INVALID_USER.CODE,
            }
        });
    } else if(!data.address) {
        throw new GraphQLError(CONSTANTS.ERRORS.INVALID_ADDRESS.MESSAGE, {
            extensions: {
              code: CONSTANTS.ERRORS.INVALID_ADDRESS.CODE,
            }
        });
    } else if(!data.processStatus) {
        throw new GraphQLError(CONSTANTS.ERRORS.INVALID_PROCESS_STATUS.MESSAGE, {
            extensions: {
              code: CONSTANTS.ERRORS.INVALID_PROCESS_STATUS.CODE,
            }
        });
    } else if(!data.assignedDoctor) {
        throw new GraphQLError(CONSTANTS.ERRORS.INVALID_DOCTOR.MESSAGE, {
            extensions: {
              code: CONSTANTS.ERRORS.INVALID_DOCTOR.CODE,
            }
        });
    } else if(!data.hospital) {
        throw new GraphQLError(CONSTANTS.ERRORS.INVALID_HOSPITAL.MESSAGE, {
            extensions: {
              code: CONSTANTS.ERRORS.INVALID_HOSPITAL.CODE,
            }
        });
    }

}