exports.FALSE = false;
exports.TRUE = true;
exports.USER_TABLE = 'dev-UserTable';
const MAX=20, MIN =2;
exports.ZERO = 0;
exports.MAX = MAX;
exports.MIN = MIN;
exports.USER = 'user'
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
	},
	INVALID_USER_NAME_LENGTH: {
		CODE: 'INVALID_USER_NAME_LENGTH',
		MESSAGE: 'User name should be in between '+MIN+' to '+MAX+' of length'
	},
	USER_EXIST: {
		CODE: 'USER_EXIST',
		MESSAGE: 'User already exist'
	}
}
exports.EMAIL_REGEX = new RegExp(/^[a-zA-Z0-9](?!.*?[^\na-zA-Z0-9]{2})[^\s@]+@[^\s@]+\.[^\s@]+[a-zA-Z0-9]$/);