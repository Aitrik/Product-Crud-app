import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { create } from '../Redux/CrudSlice';
import { useSelector } from 'react-redux';


export default function Create() {
  const navigate = useNavigate()
  const {status} = useSelector(
    (state) => state.Crud
  );

  const [user, setUser] = useState({
    title: "",
    description: "",
    image: null
  });
  
  const [error, setError] = useState('');
  const dispatch = useDispatch();

  const validation = () => {
    let error = {};
    if (!user.title) {
      error.title = 'Title is required';
    } if (!user.description) {
      error.description = 'Description is required';
    }

    return error;
  };

  const PostUserData = (e) => {
    const { name, value, files } = e.target;
    if (name === 'title') {
      setUser({ ...user, title: value });
    }
    if (name === 'description') {
      setUser({ ...user, description: value });
    }
    if (name === 'image' && files.length > 0) {
      setUser({ ...user, image: files[0] });
    }

  };

  const submit = (e) => {
    e.preventDefault();
    const validationErrors = validation();
    setError(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      const formData = new FormData();
      formData.append('title', user.title);
      formData.append('description', user.description);
      if (user.image) {
        formData.append('image', user.image);
      }

      dispatch(create(formData))



    }
  }
  return (
    <>
      <div>
        <main id="main">
          <section id="breadcrumbs" className="breadcrumbs">
            <div className="container">
              <div className="d-flex justify-content-between align-items-center">
                <h2>Create Product</h2>
                <ol>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to='/list'>Product-List</Link>
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
                    <div className="card-body p-5 shadow-5 text-center" style={{ border: "1px solid gray", borderRadius: "10px" }}>
                      <h2 className="fw-bold mb-5 ">Create Product</h2>
                      <form onSubmit={submit}>
                        {/* 2 column grid layout with text inputs for the first and last names */}

                        {/* Email input */}
                        <div className="form-outline mb-4">
                          <input
                            type="text"
                            name="title"
                            value={user.title}
                            onChange={PostUserData}
                            className={'form-control'}
                            id="form3Example3"
                          />
                          <label className="form-label" htmlFor="form3Example3">
                            Title
                          </label>
                          <span style={{ color: "red" }}>{error.title}</span>
                        </div>
                        {/* Password input */}
                        <div className="form-outline mb-4">
                          <input
                            type="text"
                            name="description"
                            value={user.description}
                            onChange={PostUserData}
                            className={`form-control`}
                            id="form3Example4"
                          />
                          <label className="form-label" htmlFor="form3Example4">
                            Description
                          </label>
                          <span style={{ color: "red" }}>{error.description}</span>
                        </div>
                        <div className="form-outline mb-4">
                          <input
                            type="file"
                            name="image"
                            onChange={PostUserData}
                            className="form-control"
                            id="form3ExampleImage"
                          />
                          <label className="form-label" htmlFor="form3ExampleImage">
                            Image
                          </label>
                          <span style={{ color: 'red' }}>{error.image}</span>
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
                      Create
                    </button>}
                        {/* Register buttons */}
                      </form>
                      <p>Go to</p><Link to="/list">Product-List</Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 mb-5 mb-lg-0">
                  <img
                    src="images\student-849822_640.jpg"
                    className="w-100  rounded-4 shadow-4"
                    style={{ height: "593px", border: "1px solid gray", borderTopRightRadius: "10px", borderBottomRightRadius: "10px" }}
                    alt=""
                  />
                </div>
              </div>
            </div>
            {/* Jumbotron */}
          </section>





        </main>
      </div>


    </>
  )
}
