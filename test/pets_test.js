const chai = require('chai');
const expect = chai.expect;
const should = chai.should();
const chaiHttp = require('chai-http');

const app = require('../app');
chai.use(chaiHttp);

describe('Test to check correct operation of the service', () => {
    it('test to listPets route... ', (done) => {
      chai.request(app)
      .get('/pets')
      .end((err, res) => {
        
        const received = res.body;
        console.log(received);
        res.body.should.be.a("array");
          res.should.have.status(200);
          expect(received).to.not.be.equal("Unexpected error")
          done();
      })  
      
    })
    it('test to showPetById route... ', (done) => {
      chai.request(app)
      .get('/pets/9')
      .end((err, res) => {
        const data = res.body;
        console.log(data)
        res.body.should.be.a("object");
          res.should.have.status(200);
          done();
      })  
      
    })
    it('test to createPets route... ', (done) => {
      chai.request(app)
      .post('/pets')
      .send({
        name: "Terry"
      })
      .end((err, res) => {
          res.should.have.status(201);
          done();
      })  
      
    })
})