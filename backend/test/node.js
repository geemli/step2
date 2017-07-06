process.env.NODE_ENV = 'test';

let node = require('../model/node');
let metric = require('../model/metric');

let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../echo');
let should = chai.should();

chai.use(chaiHttp);

describe('Nodes', () => {

  describe('/GET node', () => {
      it('it should GET all the nodes', (done) => {
        chai.request(server)
            .get('/node')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('array');
              done();
            });
      });
  });
  
  describe('/POST node', () => {
	  it('it should POST a new node', (done) => {
		  chai.request(server)
			.post('/node?name=test&mem=666')
			.end((err, res) => {
			    res.should.have.status(200);

				res.body.should.be.a('object');
                res.body.newNode.should.have.property('name');
                res.body.newNode.should.have.property('mem');
				res.body.newNode.name.should.be.eql('test');
                res.body.newNode.mem.should.be.eql('666');
			  done();
		  });
	  });
  });
  
  
  describe('/DELETE node', () => {
	  it('it should DELETE a node given the name', (done) => {
		  var noda = new node.Node('dima', 666);
		  node.nodes.push(noda);
		  chai.request(server)
			.delete('/node/dima')
			.end((err, res) => {
				res.should.have.status(500);
			done();
			});
	  });
  });

});
