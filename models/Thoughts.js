/*
- Add validator for maximum character
- Add date formatter
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
    // format date
  },
});

const ThoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      // between character amount
    },
    createdAt: {
      type: Date,
      default: Date.now,
      // format date
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
