exports.FALSE = false;
exports.TRUE = true;
exports.USER_TABLE = 'dev-UserTable';
exports.VALIDATION_MESSAGES = {
	INVALID_EMAIL: 'INVALID EMAIL'
};
exports.ERRORS = {
	USER_ID_REQUIRED: {
		CODE: 'USER_ID_REQUIRED',
		MESSAGE: 'User Id Required'
	},
    INVALID_EMAIL: {
		CODE: 'INVALID_EMAIL',
		MESSAGE: 'Please provide a valid email'
	},
    INVALID_USER: {
		CODE: 'INVALID_USER',
		MESSAGE: 'Please provide user name'
	},
    INVALID_ADDRESS: {
		CODE: 'INVALID_ADDRESS',
		MESSAGE: 'Please provide user address'
	},
    INVALID_PROCESS_STATUS: {
		CODE: 'INVALID_PROCESS_STATUS',
		MESSAGE: 'Please provide process status'
	},
    INVALID_DOCTOR: {
		CODE: 'INVALID_DOCTOR',
		MESSAGE: 'Please provide assignedDoctor'
	},
    INVALID_HOSPITAL: {
		CODE: 'INVALID_HOSPITAL',
		MESSAGE: 'Please provide hospital ID'
	}
}
exports.EMAIL_REGEX = new RegExp(/^[a-zA-Z0-9](?!.*?[^\na-zA-Z0-9]{2})[^\s@]+@[^\s@]+\.[^\s@]+[a-zA-Z0-9]$/);