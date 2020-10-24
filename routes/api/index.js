const router = require("express").Router();
const roomRoutes = require("./rooms");

// Room routes
router.use("/rooms", roomRoutes);

module.exports = router;
