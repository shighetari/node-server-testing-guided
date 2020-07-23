const server = require('./server')
const supertest = require('supertest')


describe('server', function () {
    expect(true).toBe(true)
})

describe('GET /', () => {
    it('should respond with 200 ok', () => {
        return supertest(server).get('/').expect(200)
            .then(res => {
                expect(res.status).toBe(200)
            })
    })

    it("should respond with JSON", function () {
        return supertest(server)
            .get("/")
            .then(res => {
                expect(res.type).toMatch(/json/i);
            });
    });

    it('should respond with api: up', () => {
        return supertest(server)
        .get('/')
        .then(res => {
            expect(res.body.api).toBe('up')
        })
    })
})