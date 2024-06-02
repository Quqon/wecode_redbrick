const request = require("supertest");
const { createApp } = require("../app");

describe("public_API", () => {
  let app = createApp();

  describe("new_API", () => {
    test("FAILED: DATA_DOESN'T_EXIST", async () => {

      await request(app)
        .get("/news/corona/2017")
        .expect("Content-type", /json/)
        .expect(400)
        .expect({ message: "DATA DOESN'T EXIST" });

    });

    test("SUCCESS: GET_DATA_OF_CORONA", async () => {

      await request(app)
        .get("/news/corona/2020")
        .expect("Content-type", /json/)
        .expect(200);

    });

    test("SUCCESS: GET_DATA_OF_METABUS", async () => {

      await request(app)
        .get("/news/metabus/2007")
        .expect("Content-type", /json/)
        .expect(200);

    });
  });

  describe("metro_API", () => {
    test("SUCCESS: GET_DATA_OF_METRO", async () => {

      await request(app)
        .get(encodeURI(`/metro?station=선릉`))
        .expect("Content-type", /json/)
        .expect(200);

    });

    test("SUCCESS: GET_DATA_OF_METRO_PASSENGER", async () => {

      await request(app)
        .get(encodeURI(`/metro/passenger?station=사당역`))
        .expect("Content-type", /json/)
        .expect(200);

    });

    test("FAILED: METRO_KEY_ERROR", async () => {

      await request(app)
        .get(`/metro`)
        .expect("Content-type", /json/)
        .expect(400)
        .expect({ message: "PLEASE_CHECK_STAION_NAME" })

    });

    test("FAILED: METRO_KEY_ERROR_NOT_A_STATION_ON_LINE_2", async () => {

      await request(app)
        .get(encodeURI(`/metro/passenger?station=평촌역`))
        .expect("Content-type", /json/)
        .expect(500)
        .expect({ message: "Cannot read properties of undefined (reading 'RESULT')" })

    });
  });

  describe("weather_API", () => {
    test("shuould return weather data and check properties", async () => {

      const response = await request(app)
        .get('/weather/shortTerm')
        .query({
          pageNo: 1,
          numOfRows: 10,
          base_date: '20211010',
          base_time: '0500',
          nx: 60,
          ny: 127
        })
        .expect('Content-type', /json/)
        .expect(200);

      expect(response.body).toBeInstanceOf(Array);
      expect(response.body.length).toBeGreaterThan(0);

      const data = response.body[0];
      expect(data).toHaveProperty('baseDate');
      expect(data).toHaveProperty('baseTime');
      expect(data).toHaveProperty('category');
      expect(data).toHaveProperty('nx');
      expect(data).toHaveProperty('ny');

    });

    describe("bus_API", () => {
      test("해당 키워드가 포함된 버스정류장 정보를 확인합니다.", async () => {

        await request(app)
          .get(encodeURI(`/bus/stop/강남역`))
          .expect("Content-type", /json/)
          .expect(200)

      });

      test("Bad Request", async () => {
        await request(app)
          .get(encodeURI(`/bus/stop/강남역역`))
          .expect('Content-type', /json/)
          .expect(400)
          .expect({ "message": "유효하지 않은 정보입니다." })

      });

      test("버스정류장명과 6~9시 승하차 승객 수를 확인합니다.", async () => {

        await request(app)
          .get("/bus/passenger?busNum=0017")
          .expect('Content-type', /json/)
          .expect(200)

        expect(response.body).toHaveProperty('')
      });

      test("Bad Request", async () => {

        await request(app)
          .get("/bus/passenger?busNum=000000000")
          .expect('Content-type', /json/)
          .expect(400)
          .expect({ "message": "유효하지 않은 정보입니다." })

      });
    });

    describe("dust_API", () => {
      test("FAILED: invalid SERVICE", async () => {

        await request(app)
          .get("/dust?SERVICE=1")
          .expect('Content-type', /json/)
          .expect(400);

      });

      test("SUCCESS: GET_YEAR_DUST_INFO", async () => {

        await request(app)
          .get(encodeURI(`/dust?SERVICE=yearMicroDustInfo`))
          .expect('Content-type', /json/)
          .expect(200);

        expect(response.body).toHaveProperty('data');

      });

      test("SUCCESS: GET_DUSTSHELTER", async () => {

        await request(app)
          .get(encodeURI(`/dust?SERVICE=shuntPlace`))
          .expect('Content-type', /json/)
          .expect(200);

        expect(response.body).toHaveProperty('data');

      });
    });
  })
});
