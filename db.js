/*
const users = [	
	{ id: '1', name: 'Jack', pwd: 'Jaxk1992'},
	{ id: '2', name: 'Eva', pwd: 'Eeevaaa'},
	{ id: '3', name: 'Phillipe', pwd: 'PHduHP'},
	{ id: '4', name: 'Stephine', pwd: 'stéph'},
];

const bases = [
	{ id: '1',
		owner: '3',
		access: ['1', '2'],
		content: "Content of base 1"
	},
	{
		id: '2',
		owner: '1',
		content: "Content of base 2"
	},
	{
		id: '3',
		owner: '2',
		access: ['1', '3', '4'],
		content: "Content of base 3"
	},
	{
		id:'3',
		owner: '1',
		access: ['2'],
		content: "Content of base 4"
	},
];

module.exports.users = users;
module.exports.bases = bases;
*/

const neo4j = require('neo4j-driver');
const driver = neo4j.driver(
	'bolt://localhost:7687',
	neo4j.auth.basic('neo4j', 'admin') // NOTE: username, pwd
);

module.exports.neo4j = neo4j;
module.exports.driver = driver;
