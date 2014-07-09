// modules =================================================
var express        = require('express');
var app            = express();
var bodyParser     = require('body-parser');
var hcController   = require('./server/controllers/services-controller.js')
var mongoose       = require('mongoose');
var methodOverride = require('method-override');

// configuration ===========================================
	
// config files
//var db = require('./config/db');

mongoose.connect('mongodb://localhost:27017/mean-demo');
var db = mongoose.connection;

db.on('error', function callback () {
  console.log("Connection error");
});

db.once('open', function callback () {
  console.log("Mongo working!");
});



app.use(bodyParser());

app.get('/', function (req, res) {
  res.sendfile(__dirname + '/client/index.html');
});

app.use('/js', express.static(__dirname + '/client/js'));

//REST API
app.get('/api/hc', hcController.list);
app.post('/api/hc', hcController.create);







var port = process.env.PORT || 8080; // set our port
app.set('view engine', 'html');
app.use(methodOverride('X-HTTP-Method-Override')); // simulate delete/put
app.use(express.static(__dirname + '/client')); // set the static files location /client/img will be /img for users

// routes ==================================================
require('./server/routes')(app); // pass our application into our routes

// start app ===============================================
app.listen(port);	
console.log('listening on port ' + port); 			// shoutout to the user
exports = module.exports = app; 						// expose app