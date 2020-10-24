const router = require("express").Router();
const roomsController = require("../../controllers/roomsController");

// Matches with "/api/books"
router.route("/")
  .get(roomsController.findAll)
  .post(roomsController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(roomsController.findById)
  .put(roomsController.update)
  .delete(roomsController.remove);

module.exports = router;
