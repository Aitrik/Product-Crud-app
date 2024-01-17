import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { register } from '../Redux/AuthSlice';
import { useSelector } from 'react-redux';

export default function Register() {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const [img, setimg] = useState()
  const [error, seterror] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const { status } = useSelector(
    (state) => state.Auth
  );
  const [data, setdata] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  })
  let name, value
  const PostUserData = (e) => {
    name = e.target.name;
    value = e.target.value;
    if (name === "firstName") {
      if (value.length === 0) {
        setdata({ ...data, firstName: "" })
        seterror({ ...error, firstName: "First Name is important " })
      }
      else {
        setdata({ ...data, firstName: value })
        seterror({ ...error, firstName: "" })
      }

    }
    else if (name === "lastName") {

      if (value.length === 0) {
        setdata({ ...data, lastName: "" })
        seterror({ ...error, lastName: "Last Name is important " })
      }
      else {
        setdata({ ...data, lastName: value })
        seterror({ ...error, lastName: "" })
      }

    }
    else if (name === "email") {
      if (value.length === 0) {
        setdata({ ...data, email: "" })
        seterror({ ...error, email: "Last Name is important " })
      }
      else {
        setdata({ ...data, email: value })
        seterror({ ...error, email: "" })
      }

    }
    else if (name === "password") {
      if (value.length === 0) {
        setdata({ ...data, password: "" })
        seterror({ ...error, password: "Last Name is important " })
      }
      else {
        setdata({ ...data, password: value })
        seterror({ ...error, password: "" })
      }
    }
  }
  const validation = () => {
    let error = {}
    if (!data.firstName) {
      error.firstName = " Firstname is required";
    }
    if (!data.lastName) {
      error.lastName = " Lastname is required";
    }
    if (!data.email) {
      error.email = " Email is required";
    }
    if (!data.password) {
      error.password = " password is required";
    }
    return error
  }
  const submit = (e) => {
    e.preventDefault();
    seterror(validation());
    setdata(data)
    let formdata = new FormData();
    formdata.append("first_name", data.firstName)
    formdata.append("last_name", data.lastName)
    formdata.append("email", data.email)
    formdata.append("password", data.password)
    formdata.append("profile_pic", img)
    dispatch(register(formdata))




    console.log(FormData)
  }

  return (
    <div>
      <main id="main" style={{ backgroundColor: "#f2f2f2" }}>
        <section id="breadcrumbs" className="breadcrumbs">
          <div className="container">
            <div className="d-flex justify-content-between align-items-center">
              <h2>Register</h2>
              <ol>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/register">Register</Link>
                </li>
              </ol>
            </div>
          </div>
        </section>
        <section className="text-center text-lg-start">
          <style
            dangerouslySetInnerHTML={{
              __html:
                "\n    .cascading-right {\n      margin-right: -50px;\n    }\n\n    @media (max-width: 991.98px) {\n      .cascading-right {\n        margin-right: 0;\n      }\n    }\n  "
            }}
          />
          {/* Jumbotron */}
          <div className="container py-4 " style={{marginLeft:"380px"}}>
            <div className="row g-0 align-items-center">
              <div className="col-lg-6 mb-5 mb-lg-0">
                <div
                  className="card cascading-right"
                  style={{
                    background: "hsla(0, 0%, 100%, 0.55)",
                    backdropFilter: "blur(30px)"
                  }}
                >
                  <div className="card-body p-5 shadow-5 text-center" style={{ border: "1px solid gray", borderRadius: "10px" }}>
                    <h2 className="fw-bold mb-5">Sign up </h2>
                    <form onSubmit={submit}>
                      <div className="row">
                        <div className="col-md-6 mb-4">
                          <div className="form-outline">
                            <input
                              type="text"
                              name="firstName"
                              value={data.firstName}
                              onChange={PostUserData}
                              className="form-control"
                              id="form3Example1"
                            />
                            <label className="form-label" htmlFor="form3Example1">
                              First name
                            </label>
                            <span style={{ color: 'red' }}>{error.firstName}</span>
                          </div>
                        </div>
                        <div className="col-md-6 mb-4">
                          <div className="form-outline">
                            <input
                              type="text"
                              name="lastName"
                              value={data.lastName}
                              onChange={PostUserData}
                              className="form-control"
                              id="form3Example2"
                            />
                            <label className="form-label" htmlFor="form3Example2">
                              Last name
                            </label>
                            <span style={{ color: 'red' }}>{error.lastName}</span>
                          </div>
                        </div>
                      </div>
                      <div className="form-outline mb-4">
                        <input
                          type="email"
                          name="email"
                          value={data.email}
                          onChange={PostUserData}
                          className="form-control"
                          id="form3Example3"
                        />
                        <label className="form-label" htmlFor="form3Example3">
                          Email address
                        </label>
                        <span style={{ color: 'red' }}>{error.email}</span>
                      </div>
                      <div className="form-outline mb-4">
                        <input
                          type="password"
                          name="password"
                          value={data.password}
                          onChange={PostUserData}
                          className="form-control"
                          id="form3Example4"
                        />
                        <label className="form-label" htmlFor="form3Example4">
                          Password
                        </label>
                        <span style={{ color: 'red' }}>{error.password}</span>
                      </div>
                      <div className="form-outline mb-4">
                        <input
                          type="file"
                          onChange={(e) => setimg(e.target.files[0])}
                          name="img"
                          accept="image/*"
                          className="form-control signupImgAdd"
                        />
                        {img !== "" && img !== undefined && img !== null ? (
                          <img
                            style={{ height: "140px", marginTop: "10px" }}
                            src={URL.createObjectURL(img)}
                            alt=""
                            className="upload-img signupImg"
                          />
                        ) : (
                          <>{img === "" && <p>Drag or drop content here</p>}</>
                        )}
                      </div>
                      {status === "loading" ? (
                        <button type="submit" className="btn btn-success btn-block mb-4">
                          Loading...
                        </button>
                      ) : (
                        <button type="submit" className="btn btn-success btn-block mb-4">
                          Sign up
                        </button>
                      )}
                    </form>
                    <p>Already a user? <Link to="/login">Login</Link></p>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
          {/* Jumbotron */}
        </section>
        {/* Section: Design Block */}
      </main>
    </div>

  );
}
