import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { navigate } from "@reach/router";

const UserForm = (props) => {
  // keeping track of what is being typed
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [errors, seterrors] = useState({});

  // handle upon form submition
  const create = (e) => {
    e.preventDefault();
    // props.addUser({ firstname, lastname });

    const newUser = { firstname, lastname };
    console.log(1, newUser);

    setfirstname("");
    setlastname("");

    //making post request to create a new person
    axios
      .post("http://localhost:8000/api/createuser", newUser)
      .then((res) => {
        console.log(5, res);
        if (res.data.errors) {
          seterrors(res.data.errors);
        } else {
          navigate("/allusers");
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="container-fluid">
      <div className="row justify-content-center">
        <div className="col-4">
          <div className="card bg-light mb-3">
            <div className="card-header">Register</div>
            <div class="card-body">
              <form onSubmit={create}>
                <div className="form-group">
                  <label for="firstname">First name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="firstname"
                    aria-describedby="firstname"
                    onChange={(e) => setfirstname(e.target.value)}
                    // value={firstname}
                  />
                  {/* {firstnameError ? (
                    <p style={{ color: "red" }}>{firstnameError}</p>
                  ) : (
                    ""
                  )} */}
                  <small
                    id="firstname"
                    className="form-text text-muted"
                  ></small>
                </div>

                <div className="form-group">
                  <label for="lastname">Last name</label>
                  <input
                    type="lastname"
                    className="form-control"
                    id="lastname"
                    aria-describedby="lastname"
                    onChange={(e) => setlastname(e.target.value)}
                    // value="lastname"
                  />
                  {/* {lastnameError ? (
                    <p style={{ color: "red" }}>{lastnameError}</p>
                  ) : (
                    ""
                  )} */}
                  <small id="lastname" className="form-text text-muted"></small>
                </div>

                {/* <div className="form-group">
                  <label for="email">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    aria-describedby="email"
                    onChange={validationsthree}
                    // value="email"
                  />
                  {emailError ? (
                    <p style={{ color: "red" }}>{emailError}</p>
                  ) : (
                    ""
                  )}
                  <small id="email" className="form-text text-muted"></small>
                </div>

                <div className="form-group">
                  <label for="password">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    aria-describedby="password"
                    onChange={validationsfour}
                    // value="password"
                  />
                  {passwordError ? (
                    <p style={{ color: "red" }}>{passwordError}</p>
                  ) : (
                    ""
                  )}
                  <small id="password" className="form-text text-muted"></small>
                </div> */}

                <button type="submit" className="btn btn-primary" onClick="">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserForm;
