/*
- Add way to remove associated thoughts from user
- Create method to add/remove friends /api/users/:userId/friends/:friendId
*/

const { User } = require("../models");

const userController = {
  // create get all method
  getAllUsers(req, res) {
    User.find({})
      .populate({
        path: "thoughts",
        select: "-__v",
      })
      .select("-__v")
      .then((userData) => res.json(userData))
      .catch((err) => {
        console.log(err);
        res.sendStatus(400);
      });
  },

  // pass in params to get user
  getUserById({ params }, res) {
    // find one where id is params.id
    User.findOne({ _id: params.id })
      .populate({
        path: "thoughts",
        select: "-__v",
      })
      .select("-__v")
      .then((userData) => {
        if (!userData) {
          res.sendStatus(404);
          return;
        }
        res.json(userData);
      })
      .catch((err) => {
        console.log(err);
        res.sendStatus(400);
      });
  },

  // pass in body (BSON)
  createUser({ body }, res) {
    User.create(body)
      .then((userData) => res.json(userData))
      .catch((err) => {
        console.log(err);
        res.sendStatus(400);
      });
  },

  // delete user on id
  deleteUser({ params }, res) {
    // find where _id is params.id
    User.findOneAndDelete({ _id: params.id })
      .then((userData) => {
        if (!userData) {
          res.sendStatus(404);
          return;
        }
        res.json(userData);
      })
      .catch((err) => {
        console.log(err);
        res.sendStatus(err);
      });
  },

  // update user on id
  updateUser({ params, body }, res) {
    User.findOneAndUpdate({ _id: params.id }, body, {
      // returns the new value when set to true
      new: true,
      runValidators: true,
    })
      .then((userData) => {
        if (!userData) {
          res.sendStatus(404);
          return;
        }
        res.json(userData);
      })
      .catch((err) => {
        // sends error to console and json response
        console.log(err);
        res.json(err);
      });
  },

  //addFriend()

  //deleteFriend()
};

module.exports = userController;
