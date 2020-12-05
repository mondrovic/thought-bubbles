const router = require("express").Router();
const {
  getAllUsers,
  getUserById,
  createUser,
  deleteUser,
  updateUser,
  addFriend,
  deleteFriend,
} = require("../../controllers/user-controller");

// routes that don't require id
router.route("/").get(getAllUsers).post(createUser);

// routes that require id
router.route("/:userId").get(getUserById).put(updateUser).delete(deleteUser);

// add/remove friends
router.route("/:userId/friends/:friendId").post(addFriend).delete(deleteFriend);

module.exports = router;
