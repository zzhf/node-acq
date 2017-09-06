'use strict';

module.exports = {
	port: 8001,
	url: 'mongodb://localhost:27017/acquisition',
	session: {
		name: 'SID',
		secret: 'SID',
		cookie: {
			httpOnly: true,
			secure: false,
			maxAge: 365 * 24 * 60 * 60 * 1000
		}
	}
}