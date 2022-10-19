//기상청
//국내 공항 이륙예보 조회서비스
/**
 * @swagger
 * /wether/airForecast?pageNo={pageNo}&numOfRows={numOfRows}&fctm={fctm}&icaoCode={icaoCode}:
 *  get:
 *    summary: "국내 공항 이륙예보 조회"
 *    description: "요청 경로에 값을 담아 서버에 보낸다."
 *    tags: [기상청]
 *    parameters:
 *      - in: query
 *        name: pageNo
 *        required: true
 *        description: 페이지 수
 *        schema:
 *          type: string
 *      - in: query
 *        name: numOfRows
 *        required: true
 *        description: 페이지 당 row 수
 *        schema:
 *          type: string
 *      - in: query
 *        name: fctm
 *        required: true
 *        description: 발표연월일시분
 *        schema:
 *          type: string
 *      - in: query
 *        name: icaoCode
 *        required: true
 *        description: icaoCode
 *        schema:
 *          type: string
 * 
 *    responses:
 *      "200":
 *            schema:
 *              type: object
 *              properties:
 *                data:
 *                  type: object
 *                  example:
 *                      [
 *                      {"icaoCode": "RKJB", "airportName": "무안공항", "tmFc": "202109120000", "wd": "30", "ws": "6", "ta": "24", "qnh": "2988"}
 *                    ]
 */
//단기 예보
