const CONSTANTS = require('./constant');
const utils = require('utils')

exports.validateData = (data) => {
    if (!data.userId || !data.userId.trim()) {
        utils.graphQlError(CONSTANTS.ERRORS.USER_ID_REQUIRED)
    } else if (!data.email || !data.email.trim() || !CONSTANTS.EMAIL_REGEX.test(data.email)) {
        utils.graphQlError(CONSTANTS.ERRORS.INVALID_EMAIL)
    } else if (!data.username || !data.username.trim()) {
        utils.graphQlError(CONSTANTS.ERRORS.INVALID_USER)
    } else if (!data.address || !data.address.trim()) {
        utils.graphQlError(CONSTANTS.ERRORS.INVALID_ADDRESS)
    } else if (!data.processStatus || !data.processStatus.trim()) {
        utils.graphQlError(CONSTANTS.ERRORS.INVALID_PROCESS_STATUS)
    } else if (!data.assignedDoctor || !data.assignedDoctor.trim()) {
        utils.graphQlError(CONSTANTS.ERRORS.INVALID_DOCTOR)
    } else if (!data.hospital || !data.hospital.trim()) {
        utils.graphQlError(CONSTANTS.ERRORS.INVALID_HOSPITAL)
    } else if (data.username.length > CONSTANTS.MAX || data.username.length < CONSTANTS.MIN) {
        utils.graphQlError(CONSTANTS.ERRORS.INVALID_USER_NAME_LENGTH)
    }

}