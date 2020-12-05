/*
- Add validator for maximum character
*/

const { Schema, model, Types } = require("mongoose");
const moment = require("moment");

const ReactSchema = new Schema({
  // creates separate id to avoid confusion
  reactionId: {
    type: Schema.Types.ObjectId,
    default: () => new Types.ObjectId(),
  },
  reactionBody: {
    type: String,
    required: true,
    // logic for 280 char max
  },
  username: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    // formats date
    get: (createdAtVal) =>
      moment(createdAtVal).format("MMM DD, YYYY [at] hh:mm a"),
  },
});

const ThoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      // logic for 280 char max
    },
    createdAt: {
      type: Date,
      default: Date.now,
      // formats date
      get: (createdAtVal) =>
        moment(createdAtVal).format("MMM DD, YYYY [at] hh:mm a"),
    },
    username: {
      type: String,
      required: true,
    },
    reactions: [ReactSchema],
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
    id: false,
  }
);

/*
schema.virtual runs a get function
  return length of reaction
*/

const Thoughts = model("Thoughts", ThoughtSchema);
module.exports = Thoughts;
