const router = require("express").Router();

const {
  getThoughts,
  getThoughtById,
  addThought,
  removeThought,
} = require("../../controllers/thought-controller");

// get all thoughts
router.route("/").get(getThoughts);

// update thought, delete thought and single thought
router.route("/:thoughtId").get(getThoughtById);

// add a thought (associated with a userId so required)
router.route("/:userId").post(addThought);

// remove a thought (needs to know userId it belongs to and thought to be removed)
router.route("/:userId/:thoughtId").delete(removeThought);

module.exports = router;
