const router = require('express').Router();
const controller = require("../controllers/flightController")

router.get ("/", controller.getAllFlights);
router.post ("/", controller.bookFlight);
router.get("/:id", controller.getEachFlight);
router.put("/:id", controller.updateFlight);
router.delete("/:id", controller.removeFlight);




module.exports = router;
