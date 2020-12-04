const router = require("express").Router();

const {
  getThoughts,
  getThoughtById,
  addThought,
} = require("../../controllers/thought-controller");

// get all thoughts
router.route("/").get(getThoughts);

// update thought, delete thought and single thought
router.route("/:id").get(getThoughtById);

// add a thought
router.route("/:userId");

module.exports = router;
