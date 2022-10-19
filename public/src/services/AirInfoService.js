const fetch = require('node-fetch')

const getAPI = async ( numOfRows, pageNo, fctm, icaoCode ) => {
  
  const serviceKey = process.env.PUBLIC_KEY

  const result = await fetch(
    `http://apis.data.go.kr/1360000/AirInfoService/getAirInfo?dataType=JSON&serviceKey=${serviceKey}&pageNo=${pageNo}&numOfRows=${numOfRows}&fctm=${fctm}&icaoCode=${icaoCode}`,
    {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
      }
    }
  );

  const data = await result.json();

  return data
};

module.exports = {
  getAPI,
}
