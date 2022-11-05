const router = require('express').Router()

// const express = require('express');
// const router = express.Router();
const controller = require("../controllers/flightController")

router.get("/", controller.getFlight)
router.get("/:id", controller.getFlightEach)
router.post("/", controller.CreateFlight)
router.post("/:id", controller.updateFlightData)
router.delete("/:id", controller.DeleteFlightRecord)



module.exports =router;

