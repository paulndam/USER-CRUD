import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import UserForm from "../components/UserForm.js";
import UserList from "../components/UserList.js";

export default () => {
  const [user, setuser] = useState([]);
  const [loaded, setloaded] = useState(false);
  useEffect(() => {
    axios
      .get("https://localhost:8000/api/allusers")
      .then((res) => setuser(res.data));
    setloaded(true);
  }, []);
  //We are loading all of the people in our main, and only outputting the list of people once we have gotten a response from the api.
  return (
    <div className="container-fluid">
      {/* <h3>message from rico {message}</h3> */}
      <UserForm />
      {loaded && <UserList user={user} />}
    </div>
  );
};
