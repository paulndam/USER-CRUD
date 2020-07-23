const express = require("express");
const app = express();
const port = 8000;
const cors = require("cors");
const DB_name = "Sport II DB";

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//initializing DB connection with mongoose
require("./server/config/mongoose.js");

//import our user route function from user.routes.js
const AllUserRoutes = require("./server/routes/user.route.js")(app);

//import our config route as well
const DBconnection = require("./server/config/mongoose.js")(DB_name);
app.listen(port, () => console.log(`Listening on port: ${port}`));
