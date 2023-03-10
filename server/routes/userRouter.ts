import express from "express";
const router = express.Router();
const userController = require("../controllers/userController.ts");
const authMiddleware = require("../middleware/authMiddleware");

router.post("/registration", userController.registration);
router.post("/login", userController.login);
router.get("/auth", authMiddleware, userController.check);

module.exports = router;
