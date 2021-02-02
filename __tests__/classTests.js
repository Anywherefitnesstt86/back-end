const supertest = require('supertest')
const server = require('../server')
const db = require('../data/config')
const { intersect } = require('../data/config')

beforeEach(async() => {
    await db.seed.run()
})

afterAll(async () => {
    await db.destroy()
})

describe('class tests', () => {
    it('gets classes list', async () => {
        const res = await supertest(server).get('/classes')
        expect(res.body.length).toBeGreaterThanOrEqual(8)
    })

    it('gets classes by id', async() => {
        const res = await supertest(server).get('/classes/2')
        expect(res.body.className).toBe('fit for me')
    })

    it ('create new classes', async () => {
        const res = await supertest(server)
            .post('/classes')
            .send( {id: 1, className:  "strong man", classType: "weights", classDate: "Monday", startTime: "9:00am", duration: 1, intensity: "high", location: "anywhere", numberOfStudents: 10, maxClassSize: 10},
            )
        expect(res.body.className).toBe("strong man")
    })

    it ('updates a classes', async() => {
        const res = await supertest(server)
            .put('/classes/1')
            .send({ className: 'oldie but goodie', classType: 'jazzersize'})
        expect(res.body.className).toBe('oldie but goodie')
        expect(res.body.classType).toBe('jazzersize')
    })

    it('deletes a classes', async() => {
        const res = await supertest(server)
            .delete('/classes/1')
        expect(res.statusCode).toBe(204)
    })
})