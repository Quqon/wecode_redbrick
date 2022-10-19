const { AirInfoService } = require('../services')
const { catchAsync }  = require('../utils/error')

const getAPI = catchAsync(async (req, res) => {
  const { numOfRows, pageNo, fctm, icaoCode } = req.query;

  const result = await AirInfoService.getAPI( numOfRows, pageNo, fctm, icaoCode );

  return res.status(200).json({ message : "succes", result })
})

module.exports = {
  getAPI,
}