const Router = require("express");
const router = new Router();

router.post("/registration");
router.get("/login");
router.post("/auth");

module.exports = router;
