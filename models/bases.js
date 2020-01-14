const bases = require('../db').bases;

module.exports = {
	getBaseById(id) {
		return bases.find((base) => {
			return base.id === id;
		});
	},
	getAllBases() {
		return bases;
	}
}
