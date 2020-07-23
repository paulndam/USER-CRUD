import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "@reach/router";

export default (props) => {
  const [user, setuser] = useState({});
  useEffect(() => {
    console.log("waazzaaaa");
    console.log(props._id);
    axios
      .get("http://localhost:8000/api/singleuser/" + props._id)
      .then((res) => {
        console.log(res);
        setuser(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const removeUser = (_id) => {
    console.log(_id);
    axios
      .delete(`http://localhost:/8000/api/singleuser/${props._id}`)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="container-fluid">
      <div className="card">
        <div className="card-header">{user.firstname}</div>
        <div className="card-body">
          <p>first name: {user.firstname} </p>
          <p>last name: {user.lastname}</p>
          <Link className="btn btn-outline-warning" to={`/edit/${user._d}`}>
            Edit
          </Link>
          <button
            className="btn btn-outline-danger float-right"
            onClick={(e) => removeUser(user._id)}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};
