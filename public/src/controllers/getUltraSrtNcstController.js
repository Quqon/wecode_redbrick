const { getUltraSrtNcstService } = require('../services')
const { catchAsync }  = require('../utils/error')

const getAPI = catchAsync(async (req, res) => {
  const { pageNo, numOfRows, base_date, base_time, nx, ny } = req.query;

  const result = await getUltraSrtNcstService.getAPI( pageNo, numOfRows, base_date, base_time, nx, ny );

  return res.status(200).json({ message : "succes", result })
})

module.exports = {
  getAPI,
}