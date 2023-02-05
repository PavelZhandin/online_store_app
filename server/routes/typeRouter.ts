import express from "express";
const router = express.Router();
const typeController = require("../controllers/typeController");

router.get("/", typeController.getAll);
router.post("/", typeController.create);

module.exports = router;
