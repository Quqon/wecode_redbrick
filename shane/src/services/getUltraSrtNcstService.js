const getAPI = async ( pageNo, numOfRows, base_date, base_time, nx, ny) => {
  console.log(pageNo, numOfRows, base_date, base_time, nx, ny)
  const result = await fetch(
    `http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtNcst?dataType=JSON&serviceKey=${process.env.ENCODINGKEY}&numOfRows=${numOfRows}&pageNo=${pageNo}&base_date=${base_date}&base_time=${base_time}&nx=${nx}&ny=${ny}`,
    {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
      }
    }
  );
  
  const data = await result.json();
  console.log("data : ", data)
  return data
};

module.exports = {
  getAPI,
}