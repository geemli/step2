var nodes = [];

function Node(name, mem) {
	this.name = name;
	this.mem = mem;
}

function getNodes(req, res) {
	nodes.push(new Node('1', 100));	
	if(nodes.length == 0) {
		res.send('List of nodes is empty');
	} else {
		res.json(nodes);
	}
}

function postNode(req, res) {
    var newNode = new Node(req.query.name, req.query.mem);
	nodes.push(newNode);
	res.json({message: "Node successfully added!", newNode });
}

function getNode(req, res) {
	var out;
	nodes.filter(function(curNode) {
		if(curNode.name == req.params.id) {
			out = curNode;
		}
	})
	if(!out) res.statusCode = 500;
	res.json(out);
}

function deleteNode(req, res) {
	nodes.forEach(function (item, number, array) {
		if(item.name == req.params.id) {
			array.remove(item);
		}	
	})
	res.json({ message: "Node successfully deleted!", result });
}

module.exports = { Node, nodes, getNodes, postNode, getNode, deleteNode };