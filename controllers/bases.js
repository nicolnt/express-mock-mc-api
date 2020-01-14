const express = require('express');
const router = express.Router();

const bases_model = require('../models/bases');

module.exports = function(app) {
	app.use('/bases', router);

	router.get('/', (req, res, next) => {
		var bases = bases_model.getAllBases();
		if (bases.length > 0 ) res.status(200).send(bases);
		else res.status(404).send({ error: "no base found" });
	});
	
	router.get('/:id', (req, res, next) => {
		var base = bases_model.getBaseById(req.params.id);
		if (base) res.status(200).send(base);
		else res.status(404).send({ error: "base not found" });
	});
}
