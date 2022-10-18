// const fetch = require('fetch');
const { catchAsync } = require('../utils/error');

const getInformation = async(req, res) => {
  const { yyyymm, line, station } = req.params;
  let subwayInfo = await fetch(
    `http://openapi.seoul.go.kr:8088/${process.env.API_KEY}/json/CardSubwayTime/1/5/${yyyymm}/${line}/${station}`,
    {
      method : "get"
    }
  );

  let result = await subwayInfo.json();
  return res.status(200).json(result.CardSubwayTime.row[0]);
}

module.exports = {
  getInformation
}

// const getInformation = async(req, res) => {
//   let reqInfoApi = await fetch(
//     `http://apis.data.go.kr/1262000/CountryGnrlInfoService2/getCountryGnrlInfoList2?serviceKey=%2BHaYQvNzfcRWEmMB5a%2BeTF7gs%2BU4gTozi28BBf4UT5ovJZ8kWuYLESyedeelN63rB5FensbkVwOnDckyIPyuKA%3D%3D&pageNo=1&numOfRows=10`,
//     {
//       method: "get",
//     }
//   );

//   let result = await reqInfoApi.json();
//   return res.status(200).json(result);
// }