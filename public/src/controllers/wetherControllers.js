const { weatherServices } = require('../services')
const { catchAsync } = require('../utils/error')

const shortTerm = catchAsync(async (req, res) => {
  const { pageNo, numOfRows, base_date, base_time, nx, ny } = req.query;

  const result = await weatherServices.shortTerm(pageNo, numOfRows, base_date, base_time, nx, ny);

  return res.status(200).json({ message: "succes", result })
})


const airForecast = catchAsync(async (req, res) => {
  const { numOfRows, pageNo, fctm, icaoCode } = req.query;

  const result = await weatherServices.airForecast(numOfRows, pageNo, fctm, icaoCode);

  return res.status(200).json({ message: "succes", result })
})

module.exports = {
  shortTerm,
  airForecast,
}