import React from "react";
import User from "./views/User.js";
import UserForm from "./components/UserForm.js";
import UserList from "./components/UserList.js";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Router, link } from "@reach/router";
import SpecificUser from "./views/SpecificUser";
import EditUserForm from "./components/EditUserForm.js";

function App() {
  return (
    <div className="container-fluid">
      <Router>
        {/* <User path="/" /> */}
        <UserForm path="/" />
        <UserList path="/allusers" />
        <SpecificUser path="/singleuser/:_id" />
        <EditUserForm path="/edit/:_id" />
      </Router>
    </div>
  );
}

export default App;
