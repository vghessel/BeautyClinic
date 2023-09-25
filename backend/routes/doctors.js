const router = require("express").Router();

const doctorController = require("../controllers/doctorController");

// Routes
router.route("/doctors").post((req, res) => doctorController.create(req, res));
router.route("/doctors").get((req, res) => doctorController.getAll(req, res));
router.route("/doctors/:id").get((req, res) => doctorController.get(req, res));
router.route("/doctors/:id").delete((req, res) => doctorController.delete(req, res));
router.route("/doctors/:id").put((req, res) => doctorController.update(req, res));

module.exports = router;