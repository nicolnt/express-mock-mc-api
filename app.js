const express = require('express');
const app = express();

// NOTE: middleware function that gets executed first
app.use((req, res, next) => {
	// NOTE: Body of the request (post and put request for instance)
	// http://expressjs.com/en/4x/api.html#req.body
	console.log('Request body: ', req.body); 

	// NOTE: Query string parameter
	// http://expressjs.com/en/4x/api.html#req.query
	console.log('Request query parameters: ',req.query); 

	next(); // NOTE: Don't forget to pursue to the next middleware otherwise the server stops
});


/* NOTE: possible syntax
const index = require('./controllers/index');
index(app);
*/
require('./controllers/index')(app);
require('./controllers/users')(app);
require('./controllers/neuron')(app);
require('./controllers/bases')(app);

const port = 3000;
if (!module.parent) {
	app.listen(port, () => { console.log(`Listening on port ${port}`) });
}
