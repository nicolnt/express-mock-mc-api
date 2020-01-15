const neo4j = require('../db').neo4j;
const neoDriver = require('../db').driver;

module.exports = {
	getUserNameById(id) {
		return new Promise(function(resolve, reject) {
			var userName;
			const session = neoDriver.session({ defaultAccessMode: neo4j.session.READ });
			session.run(`
		MATCH (user:User)
		WHERE id(user) = $userId
		RETURN user
			`,
				{
					"userId": parseInt(id) // NOTE: Must be an integer value
				})
				.then(result => {
					if(result.records.length != 0 ) {
						//return result.records[0].get('name'); // NOTE: Only works if I define a RETURN user.name AS name
						//return result.records[0]["_fields"][0].properties.name; // NOTE: Seems completely crazy, ther should be a more viable solution
						userName = result.records[0]._fields[0].properties.name; // NOTE: Still look not viable
						resolve(userName);
					}

				})
				.catch(error => {
					console.log(error);
					reject(new Error(`Couldn't get the user`))
				})
				.then(() => {
					session.close();
				});
		});
	},
	getAllUsers() {
		return users;
	}
}
