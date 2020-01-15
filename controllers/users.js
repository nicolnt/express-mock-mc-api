const express = require('express');
const router = express.Router();

const user_model = require('../models/users');

module.exports = function(app) {

	app.use('/user', router);

	router.get('/', (req, res, next) => {
		var users = user_model.getAllUsers();
		if (users.length > 0 ) res.status(200).send(users);
		else res.status(404).send({ error: "no user found" });
	});

	router.get('/:id', (req, res, next) => {

		// NOTE: internal param system like the :id
		// http://expressjs.com/en/4x/api.html#req.params
		console.log(req.params); 
		user_model.getUserNameById(req.params.id)
			.then(userName => {
				res.status(200).send({ name: userName });
				res.end();
			})
			.catch(err => {
				if (err) res.status(404).send({ error: "user not found" });
			});
	});
};
