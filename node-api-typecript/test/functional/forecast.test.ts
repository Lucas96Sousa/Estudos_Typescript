import supertest from 'supertest'

describe('Beack forecast functional tests', () => {
    it('should return a forecast with just a few times', async() => {
        const {body, status} = await supertest(app).get('/forecast');

        expect(status).toBe(200)
        expect(body).toBe([{
            'time': '2020-11-9T00:00:00+00:00',
            "forecast": [{
                "lat": -33.79276,
                "lng": 151.289824,
                "name": "Manly",
                "position": "E",
                "rating": 2,
                "swellDirection": 64.26,
                "swellHight": 0.15,
                "swelPeriod": 3.89,
                'time': '2020-11-9T00:00:00+00:00',
                "waveDirection": 231.38,
                "windDirection": 299.45
            }]
        }])
    })
})