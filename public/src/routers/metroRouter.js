const router = require("express").Router();

const { metroController } = require("../controllers");

router.route("/").get(metroController.getMetroInfo);
router.route("/passenger").get(metroController.getPassengerInfo);

module.exports = router;
