const express = require('express');
const router = express.Router();

const neuron_model = require('../models/neuron');

module.exports = function(app) {

	app.use('/neuron', router);

	router.get('/:id', (req, res, next) => {
		neuron_model.getNeuronTitleById(req.params.id)
			.then(title => {
				res.status(200).send({ title });
				res.end(); // TODO: try remove and test
			})
			.catch(err => {
				if (err) res.status(404).send({ error: `Neuron ${req.params.id} not found` });
			});
	});
	router.get('/id/:title', (req, res, next) => {
		neuron_model.getNeuronIdsByTitle(req.params.title)
			.then(ids => {
				res.status(200).send({ ids });
				res.end(); // TODO: try remove and test
			})
			.catch(err => {
				if (err) res.status(404).send({ error: `No Neuron with this title: ${req.params.title}`});
			});
	});
};
