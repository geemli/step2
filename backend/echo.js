var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var node = require('./model/node');
var metric = require('./model/metric');

   app.all('*', function(req, res, next) {
           res.header('Access-Control-Allow-Origin', '*');
           res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
		   res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
           next();
   });

app.use(bodyParser.json());                                     
app.use(bodyParser.urlencoded({extended: true}));               
app.use(bodyParser.text());                                    
app.use(bodyParser.json({ type: 'application/json'}));  
app.get("/", (req, res) => res.json({message: "Welcome!"}));

app.route("/node")
    .get(node.getNodes)
    .post(node.postNode)
app.route("/node/:id")
    .get(node.getNode)
    .delete(node.deleteNode)
app.route("/metric")
	.get(metric.getMetrics)
app.route("/metric/:param")
	.get(metric.getMetric)

app.listen(3000, function() {
	console.log('3000 port');
});

module.exports = app; // для тестирования
