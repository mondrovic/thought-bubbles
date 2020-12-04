const { Thoughts, User } = require("../models");
const userController = require("./user-controller");

const thoughtController = {
  // get all thoughts
  getThoughts(req, res) {
    Thoughts.find({})
      .select("-__v")
      .then((thoughtData) => res.json(dbThoughtData))
      .catch((err) => {
        console.log(err);
        res.sendStatus(400);
      });
  },
  // get single thought
  getThoughtById({ params }, res) {
    Thoughts.findOne({ _id: params.id })
      .select("-__v")
      .then((dbThoughtData) => {
        if (!dbThoughtData) {
          res.status(404).json({ message: "No thought with that ID" });
          return;
        }
        res.json(dbThoughtData);
      })
      .catch((err) => {
        console.log(err);
        res.sendStatus(404);
      });
  },

  // add thought
  addThought({ params, body }, res) {
    Thoughts.create(body)
      .then(({ _id }) => {
        console.log(_id);
        // returns _id where params.userId then pushes to thoughts
        return User.findOneAndUpdate(
          { _id: params.userId },
          { $push: { thoughts: _id } },
          { new: true }
        );
      })
      .then((thoughtData) => {
        if (!thoughtData) {
          res.status(404).json({ message: "No user found with that id" });
          return;
        }
        res.json(thoughtData);
      })
      .catch((err) => {
        console.log(err);
        res.json(err);
      });
  },
};

module.exports = thoughtController;
