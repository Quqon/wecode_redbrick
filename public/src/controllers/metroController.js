const { metroService } = require("../services");
const { catchAsync } = require("../utils/error");

const getMetroInfo = catchAsync(async (req, res, next) => {
  if (!req.query.station) {
    let err = new Error("PLEASE_CHECK_STAION_NAME");
    throw err;
  } else {
    let currentStation = req.query.station;
    if (currentStation.endsWith("역") == true) {
      currentStation = currentStation.replace(/역$/, "");
    }
    let result = await metroService.getMetroInfo(currentStation);
    return await res.status(200).json(result);
  }
});

const getPassengerInfo = catchAsync(async (req, res, next) => {
  if (!req.query.station) {
    let err = new Error("PLEASE_CHECK_STAION_NAME");
    throw err;
  } else {
    let currentStation = req.query.station;
    if (currentStation.endsWith("역") == true) {
      currentStation = currentStation.replace(/역$/, "");
    }
    let result = await metroService.getPassengerInfo(currentStation);

    return await res.status(200).json(result);
  }
});

module.exports = {
  getMetroInfo,
  getPassengerInfo,
};
