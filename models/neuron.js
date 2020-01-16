const uuid = require('uuid');

const neo4j = require('../db').neo4j;
const neoDriver = require('../db').driver;

module.exports = {
	createNeuron(neuron) {
		return new Promise(function(resolve, reject) {

			const session = neoDriver.session({ defaultAccessMode: neo4j.session.WRITE });
			session.run(`
		CREATE (neuron:Neuron $props)
			`,
				{
					"id": parseInt(id) // NOTE: Must be an integer value
				})
				.then(result => {
					if(result.records.length != 0 ) {
						const title = result.records[0].get('neuron.title');
						resolve(title);
					}
					else reject(new Error(`Neuron with this id not found`))
				})
				.catch(error => {
					console.log(error);
					reject(new Error(`An error occurred`))
				})
				.then(() => {
					session.close();
				});
		});
	},
	getNeuronTitleById(id) {
		return new Promise(function(resolve, reject) {

			const session = neoDriver.session({ defaultAccessMode: neo4j.session.READ });
			session.run(`
		MATCH (neuron:Neuron)
		WHERE id(neuron) = $id
		RETURN neuron.title
			`,
				{
					"id": parseInt(id) // NOTE: Must be an integer value
				})
				.then(result => {
					if(result.records.length != 0 ) {
						const title = result.records[0].get('neuron.title');
						resolve(title);
					}
					else reject(new Error(`Neuron with this id not found`))
				})
				.catch(error => {
					console.log(error);
					reject(new Error(`An error occurred`))
				})
				.then(() => {
					session.close();
				});
		});
	},
	getNeuronIdsByTitle(title) {
		return new Promise(function(resolve, reject) {
			const session = neoDriver.session({ defaultAccessMode: neo4j.session.READ });
			session.run(`
		MATCH (neuron:Neuron)
		WHERE neuron.title = $title
		RETURN ID(neuron)
			`,
				{
					"title": title 
				})
				.then(result => {
					if(result.records.length != 0 ) {
						const ids = result.records.map((neuron) => {
							return neuron.get('id');
						})
						resolve(ids);
					}
					else reject(new Error(`No neuron with this title`))
				})
				.catch(error => {
					console.log(error);
					reject(new Error(`An error occurred`))
				})
				.then(() => {
					session.close();
				});
		});
	}
}
