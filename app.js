var express = require('express');
const listingController = require('./controllers/listingController');
var app = express();

//set up template engine
app.set('view engine', 'ejs');

//static files
app.use('/assets',express.static('assets'));

//fire controllers
listingController(app);

//listen to port
app.listen(3000);
console.log('You are listening to port 3000');