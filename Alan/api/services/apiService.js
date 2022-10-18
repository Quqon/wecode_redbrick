require("dotenv").config();

// const { apiDao } = require("../models");
const getApi = async (page, perPage) => {
  const response = await fetch(
    `https://api.odcloud.kr/api/EvInfoServiceV2/v1/getEvSearchList?page=${page}&perPage=${perPage}&serviceKey=${process.env.SERVICEKEY}`,
    {
      method: "GET",
      headers: {
        accept: "application/json",
      },
    }
  );
  const data = await response.json();
  console.log(data);
  return data;
};

module.exports = { getApi };
