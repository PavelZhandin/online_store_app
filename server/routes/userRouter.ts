const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController.ts");

router.post("/registration", userController.registration);
router.post("/login", userController.login);

router.get("/auth", userController.check);

module.exports = router;
