const os = require('os');

function getMetric(req, res) {
	var param = req.params.param;
	
	if(param == "cpu") {
		res.send(JSON.stringify(os.cpus()));
	} else if(param == "memory") {
		var arr = [];
		arr.push(os.freemem(), os.totalmem());
		res.send(JSON.stringify(arr));
	} else {
		res.send(JSON.stringify(['Please, choice other param']));
	}
}

function getMetrics(req, res) {
	res.send(JSON.stringify(["cpu", "memory"]));
}

module.exports = { getMetric, getMetrics };