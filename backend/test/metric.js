process.env.NODE_ENV = 'test';

let metric = require('../model/metric');

let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../echo');
let should = chai.should();

chai.use(chaiHttp);

describe('Metric', () => {

  describe('/GET metrics', () => {
      it('it should GET all available metrics', (done) => {
        chai.request(server)
            .get('/metric')
            .end((err, res) => {
                res.should.have.status(200);
              done();
            });
      });
  });
  
  describe('/GET metric', () => {
	  it('it should GET cpu metric', (done) => {
		  chai.request(server)
			.get('/metric/cpu')
			.end((err, res) => {
			    res.should.have.status(200);
              done();
		  });
	  });
  });
  
    describe('/GET metric', () => {
	  it('it should GET memory metric', (done) => {
		  chai.request(server)
			.get('/metric/memory')
			.end((err, res) => {
			    res.should.have.status(200);
              done();
		  });
	  });
  });
});
