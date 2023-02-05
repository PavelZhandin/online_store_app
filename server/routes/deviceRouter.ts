import express, { Request, Response } from "express";
const router = express.Router();

const deviceController = require("../controllers/deviceController");
router.get("/", deviceController.getAll);
router.post("/", deviceController.create);

module.exports = router;
