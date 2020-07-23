import React, { useEffect, useState } from "react";
import axios from "axios";
import { navigate } from "@reach/router";
import moment from "moment";

//editing header

const EditUserForm = (props) => {
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [errors, seterrors] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/allusers/${props._id}`)
      .then((res) => {
        console.log(res);
        setfirstname(res.data.firstname);
        setlastname(res.data.lastname);
      })
      .catch((errors) => console.log(errors.message));
  }, [props._id]);

  //method to update

  const UpdateUser = (e) => {
    e.preventDefault();
    const userx = { firstname, lastname };
    axios
      .put(`http://localhost:8000/api/allusers/update/${props._id}`, userx)
      .then((res) => {
        console.log(res);
        if (res.data.errors) {
          seterrors(res.data.errors);
        } else {
          navigate("/allusers");
        }
      })
      .catch((error) => console.log(errors.message));
  };

  const removeUser = () => {
    axios
      .delete(`http://localhost:8000/api/allusers/delete/${props._id}`)
      .then((res) => {
        console.log(res);
        navigate("/allusers");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="row">
      <div className="col">
        <form onSubmit={UpdateUser}>
          <div className="form-group">
            <label for="firstname">First name</label>
            <input
              type="text"
              className="form-control"
              id="firstname"
              aria-describedby="firstname"
              onChange={(e) => setfirstname(e.target.value)}
              value={firstname}
            />
            {/* {firstnameError ? (
                    <p style={{ color: "red" }}>{firstnameError}</p>
                  ) : (
                    ""
                  )} */}
            <small id="firstname" className="form-text text-muted"></small>
          </div>

          <div className="form-group">
            <label for="lastname">Last name</label>
            <input
              type="lastname"
              className="form-control"
              id="lastname"
              aria-describedby="lastname"
              onChange={(e) => setlastname(e.target.value)}
              value={lastname}
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

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
        <div className="col-sm-8 offset-sm-2 mt-5">
          <button className="btn btn-danger btn-block" onClick={removeUser}>
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditUserForm;
