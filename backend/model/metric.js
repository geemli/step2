const os = require('os');

function getMetric(req, res) {
	var param = req.params.param;
	
	if(param == "cpu") {
		res.send(JSON.stringify(os.cpus()));
	} else if(param == "memory") {
		var current_mem = os.freemem();
		var max_mem = os.totalmem();
		res.send('used ' + current_mem + ' from ' + max_mem);
	} else {
		res.send("Please, choice other param");
	}
}

function getMetrics(req, res) {
	res.send("cpu<br>memory");
}

module.exports = { getMetric, getMetrics };