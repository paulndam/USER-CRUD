console.log("user.controller.js");

//importing my jokes.model from model and setting it into our controller

const User = require("../models/user.model");

module.exports.index = (req, res) => {
  res.json({ message: "Hello Rico" });
};

//method creating new user

module.exports.index = (req, res) => {
  res.json({ message: "Hello Rico" });
};

//method creating user is here now my friend

module.exports.createUser = (req, res) => {
  console.log(req.body);
  const { firstname, lastname } = req.body;
  User.create({
    firstname,
    lastname,
  })
    .then((user) => res.json(user))
    .catch((err) => res.json(err.message));
};

//getting all users

module.exports.allusers = (req, res) => {
  User.find({})
    .then((allUsers) => res.json({ user: allUsers }))
    .catch((err) => res.json({ message: err.message }));
};

// getting single user
//after this make sure to add another that can a specific user

module.exports.singleuser = (req, res) => {
  User.findOne({ _id: req.params._id })
    .then((user) => res.json(user))
    .catch((err) => res.json({ message: err.message }));
};

// updating

module.exports.UpdateUser = (req, res) => {
  User.findOneAndUpdate({ _id: req.params._id }, req.body, { new: true })
    .then((updateuser) => res.json({ user: updateuser }))
    .catch((err) =>
      res.json({ message: "something went wrong", error: err.message })
    );
};

module.exports.DeleteUser = (req, res) => {
  console.log(req.params._id);
  User.deleteOne({ _id: req.params._id })
    .then((deleteuser) => res.json({ user: deleteuser }))
    .catch((err) => res.json({ message: "Something went wrong", error: err }));
};
