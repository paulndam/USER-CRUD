//mongoose will still need to be required here
console.log("jokes.model.js");
const mongoose = require("mongoose");

//making new schema instance of our jokes

const UserSchema = new mongoose.Schema(
  {
    firstname: {
      type: String,
      required: [true, "firstname line is required"],
      minlength: [3, " gotta be at least 3 characters"],
    },
    lastname: {
      type: String,
      required: [true, "lastname line is required"],
      minlength: [3, "lastname gotta be at least 3 characters"],
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", UserSchema);

module.exports = User;
