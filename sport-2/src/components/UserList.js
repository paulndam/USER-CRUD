import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "@reach/router";

//making a list to display all the users
export default (props) => {
  const [allofusers, setallofusers] = useState([]);
  //   const [firstname, setfirstname] = useState([]);
  //   const [lastname, setlastname] = useState([]);

  const getalluser = () => {
    axios
      .get("http://localhost:8000/api/allusers")
      .then((res) => {
        console.log(res);
        setallofusers(res.data.user);
        // setfirstname(res.data);
        // setlastname(res.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getalluser();
  }, []);

  // to delete user
  const removeUser = (_id) => {
    console.log(_id);
    axios
      .delete(`http://localhost:8000/api/allusers/delete/${_id}`)
      .then((res) => {
        console.log(res);
        getalluser();
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="conatiner-fluid">
      {allofusers.map((x, i) => (
        <div className="card my-3" key={x._id}>
          <div className="card-body">
            <p>first name: {x.firstname}</p>
            <p>last name: {x.lastname}</p>
            <Link className="btn btn-outline-warning" to={`/edit/${x._id}`}>
              Edit
            </Link>
            <button
              className="btn btn-outline-danger float-right"
              onClick={(e) => removeUser(x._id)}
            >
              Remove
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
