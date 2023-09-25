const router = require("express").Router();

// Services Router
const serviceRouter = require("./services");
router.use("/", serviceRouter);

// Doctors
const doctorRouter = require("./doctors");
router.use("/", doctorRouter);

module.exports = router;