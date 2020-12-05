/*
- Add validator for email
- Set up virtual to count total thoughts
*/

const { Schema, model } = require("mongoose");
const moment = require("moment");

const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: "Thoughts",
      },
    ],
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

userSchema.virtual("thoughtCount").get(function () {
  return this.thoughts.length;
});

const User = model("User", userSchema);

module.exports = User;
