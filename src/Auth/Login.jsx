import React, { useState,useEffect } from 'react'
import { Link ,useNavigate} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../Redux/AuthSlice'
// import { reset_redirectTo } from '../Redux/AuthSlice';


export default function Login() {
    // const { redirectTo } = useSelector((state) => state.Auth);
    const navigate= useNavigate()
    const [user, setUser] = useState({

        email: '',
        password: '',
    });
    const {status} = useSelector(
      (state) => state.Auth
    );
    const [error, setError] = useState('');
    const dispatch = useDispatch();


    const validation = () => {
        let error = {};

        if (!user.email) {
            error.email = 'Email is required';
        } if (!user.password) {
            error.password = 'Password is required';
        }

        return error;
    };

    // useEffect(()=>{
    //     dispatch(reset_redirectTo(null))
    // },[])

    const PostUserData = (e) => {
        const { name, value } = e.target;

        if (name === 'email') {
            setUser({ ...user, email: value });
        }
        if (name === 'password') {
            setUser({ ...user, password: value });
        }
    };

    const submit = (e) => {
        e.preventDefault();
        const validationErrors = validation();
        setError(validationErrors);

        if (Object.keys(validationErrors).length === 0) {
            const formData = new FormData();

            formData.append('email', user.email);
            formData.append('password', user.password);
            dispatch(login(formData)).then(()=>{
                let token = localStorage.getItem("token");
            let isInLoginPage = window.location.pathname.toLowerCase() === "/login";

            if (token !== null && token !== undefined && token !== "") {
                isInLoginPage && navigate("/list");
            }
            });
        }
    };
    // useEffect(() => {
    //     const RedirectUser = () => {
        // let token = localStorage.getItem("token");
        // let isInLoginPage = window.location.pathname.toLowerCase() === "/login";

        // if (token !== null && token !== undefined && token !== "") {
        //     isInLoginPage && navigate("/create");
        // }
    //     };

    //     RedirectUser();
    // }, [navigate, redirectTo]);
    // console.log(redirectTo)

    return (
        <>
            <main id="main">
                <section id="breadcrumbs" className="breadcrumbs">
                    <div className="container">
                        <div className="d-flex justify-content-between align-items-center">
                            <h2>Login</h2>
                            <ol>
                                <li>
                                    <Link to="/">Home</Link>
                                </li>
                                <li>
                                    <Link to='/login'>Login</Link>
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
          <div className="container py-4" >
            <div className="row g-0 align-items-center">
              <div className="col-lg-6 mb-5 mb-lg-0">
                <div
                  className="card cascading-right"
                  style={{
                    background: "hsla(0, 0%, 100%, 0.55)",
                    backdropFilter: "blur(30px)"
                  }}
                >
                  <div className="card-body p-5 shadow-5 text-center" style={{border:"1px solid gray",borderRadius:"10px"}}>
                    <h2 className="fw-bold mb-5 ">Login </h2>
                    <form onSubmit={submit}>
                      {/* 2 column grid layout with text inputs for the first and last names */}
                      
                      {/* Email input */}
                      <div className="form-outline mb-4">
                        <input
                          type="email"
                          name="email"
                          value={user.email}
                          onChange={PostUserData}
                          className='form-control'
                          id="form3Example3"
                        />
                        <label className="form-label" htmlFor="form3Example3">
                          Email address
                        </label>
                        <span style={{color:'red'}}>{error.email}</span>
                      </div>
                      {/* Password input */}
                      <div className="form-outline mb-4">
                        <input
                          type="password"
                          name="password"
                          value={user.password}
                          onChange={PostUserData}
                          className='form-control'
                          id="form3Example4"
                        />
                        <label className="form-label" htmlFor="form3Example4">
                          Password
                        </label>
                        <span style={{color:'red'}}>{error.password}</span>
                      </div>
                      
                     
                      {/* Submit button */}
                      {status==="loading"?(
                        <button
                        type="submit"
                        className="btn btn-success btn-block mb-4"
                      >
                        Loading...
                      </button>
                      ):<button
                      type="submit"
                      className="btn btn-success btn-block mb-4"
                    >
                      Login
                    </button>}

                      {/* Register buttons */}
                    </form>
                    <p>Not a user?</p><Link to="/register">Sign-Up</Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 mb-5 mb-lg-0">
                <img
                  src="images\business-2846221_640.jpg"
                  className="w-100  rounded-4 shadow-4"
                  style={{ height: "500px",border:"1px solid gray",borderTopRightRadius:"10px",borderBottomRightRadius:"10px"}}
                  alt=""
                />
              </div>
            </div>
          </div>
          {/* Jumbotron */}
        </section>
            </main>

        </>
    )
}
