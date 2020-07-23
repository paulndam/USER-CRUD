console.log("user.route.js");

const UserController = require("../controllers/user.controller");

module.exports = (app) => {
  app.get("/api", UserController.index);
  app.post("/api/createuser", UserController.createUser);
  app.get("/api/allusers", UserController.allusers);
  app.get("/api/singleuser/:_id", UserController.singleuser);
  app.put("/api/allusers/update/:_id", UserController.UpdateUser);
  app.delete("/api/allusers/delete/:_id", UserController.DeleteUser);
};
