import express, { IRouterMatcher, Router } from "express";
const router = express.Router();
const typeController = require("../controllers/typeController");
const checkRole = require("../middleware/checkRoleMiddleware");

router.get("/", typeController.getAll);
router.post("/", checkRole("ADMIN"), typeController.create);

module.exports = router;
