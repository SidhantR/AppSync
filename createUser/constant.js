exports.FALSE = false;
exports.TRUE = true;
exports.USER_TABLE = 'dev-UserTable';
exports.VALIDATION_MESSAGES = {
	INVALID_EMAIL: 'INVALID EMAIL'
};
exports.ERRORS = {
	INVALID_EMAIL: {
		CODE: 'INVALID_EMAIL',
		MESSAGE: 'Please provid a valid email'
	}
}
exports.EMAIL_REGEX = new RegExp(/^[a-zA-Z0-9](?!.*?[^\na-zA-Z0-9]{2})[^\s@]+@[^\s@]+\.[^\s@]+[a-zA-Z0-9]$/);