const users = require('../db').users;

module.exports = {
	getUserNameById(id) {
		return users.find((user) => {
			return user.id === id;
		});
	},
	getAllUsers() {
		return users;
	}
}
