/*
/api/users/:userId/friends/:friendId

    POST to add a new friend to a user's friend list

    DELETE to remove a friend from a user's friend list
*/

const router = require("express").Router();
const {
  getAllUsers,
  getUserById,
  createUser,
  deleteUser,
  updateUser,
} = require("../../controllers/user-controller");

// routes that don't require id
router.route("/").get(getAllUsers).post(createUser);

// routes that require id
router.route("/:id").get(getUserById).put(updateUser).delete(deleteUser);

module.exports = router;
