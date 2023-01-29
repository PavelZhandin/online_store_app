const express = require("express");
const router = express.Router();

router.post("/");
router.post("/");

router.get("/", (req, res) => {
  res.json({ message: "AUTH" });
});

module.exports = router;
