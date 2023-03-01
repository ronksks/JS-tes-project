const nock = require('nock');
const request = require('supertest')
const expect = require('chai').expect;
const chai = require('chai')
chai.should();

describe('Test suit including nock', () => {

    describe('Setting up the beforEach nock', () => {
        beforeEach(() => {
            nock('http://localhost:3000')
                .get('/api/users/')
                .reply(200, {
                    'users': [{
                        'id': '3',
                        'name': 'Ronsky',
                        'gender': 'male'
                    }]

                })
                //setting nock with query
                .get('/api/users/')
                .query({
                    name: 'Miriam',
                    gender: 'female'
                })
                .reply(200, {
                    'users': [{
                        'id': '3',
                        'name': 'Miriam',
                        'gender': 'female'
                    }]
                })
                //setting nock with 2 parameters
                .get('/api/users/id=15&gender=male')
                .reply(200, {
                    'users': [{
                        'id': '15',
                        'name': 'Jhon',
                        'gender': 'male'
                    }]
                })
                .post('/api/users/')
                .reply(201, {
                    'users': [{
                        'id': '10',
                        'name': 'xxx',
                        'gender': 'male'
                    }]
                })
                .post('/api/users/4')
                // .set('Authorization', 'abc123')
                .reply(201, {
                    'users': [{
                        'id': '10',
                        'name': 'xxx',
                        'gender': 'male'
                    }]
                });

        }); // end beforeEach

        describe('Nock intercepters get func', () => {
            it('nock intercepts get', (done) => {
                request('http://localhost:3000')
                    .get('/api/users/')
                    .end((err, res) => {
                        expect(res.body.users[0].id).to.be.equal('3');
                        expect(res.body.users[0].name).to.be.equal('Ronsky');
                    });
                    done();
            });
            it('nock intercepts get with query', (done) => {
                request('http://localhost:3000')
                    .get('/api/users/')
                    .query({
                        name: 'Miriam',
                        gender: 'female'

                    })
                    .end((err, res) => {
                        expect(res.body.users[0].id).to.be.equal('3');
                        expect(res.body.users[0].name).to.be.equal('Miriam');
                    });
                    done();
            });// end nock intercepts get with query

            it('nock intercepts get with parameters in url', (done) => {
                request('http://localhost:3000')
                    .get('/api/users/id=15&gender=male')
                    .end((err, res) => {
                        expect(res.body.users[0].id).to.be.equal('15');
                        expect(res.body.users[0].gender).to.be.equal('male');
                    });
                    done();
            });
        });// end Nock intercepters get func


        describe('Nock intercepters post func', () => {
            it('nock intercept post', (done) => {
                request('http://localhost:3000')
                    .post('/api/users/')
                    .end((err, res) => {
                        console.log(res.body.users[0].name)
                        expect(res.statusCode).to.be.eq(201)
                        expect(res.body.users[0]).to.be.a('object')
                        expect(res.body.users[0].id).to.exist
                        expect(res.body.users[0].name).to.be.a('string')
                        expect(res.body.users[0].name).to.have.lengthOf(3)
                        expect(res.body.users[0].gender).to.exist
                        res.body.users[0].should.have.property('id').eq('10')
                        res.body.users[0].should.have.property('name').to.be.a('string')
                    });
                    done();
            });

            // it('nock intercept post', () => {
            //     request('http://localhost:3000')
            //         .post('/api/users/')
            //         .end((err, res) => {
            //             console.log(res.headers)
            //             expect(res.statusCode).to.be.eq(201)
            //             expect(res.body.users[0]).to.be.a('object')
            //             expect(res.body.users[0].id).to.exist
            //         });
            // });

        }); //Nock intercepters post func
    });
});// end test suit

//write a cunction the ger a string and returns int
