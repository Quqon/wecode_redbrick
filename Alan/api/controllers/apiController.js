const { apiService } = require("../services");

const getApi = async (req, res) => {
  const { page, perPage } = req.query;
  const result = await apiService.getApi(page, perPage);
  return res.status(200).json({ message: "success", result });
};

module.exports = {
  getApi,
};
