import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { productDetails, update } from '../Redux/CrudSlice';
import { Link, useParams } from 'react-router-dom';

export default function Update() {
  const dispatch = useDispatch()
  const [img, setimg] = useState()
  const { det } = useSelector(state => state.Crud);
  const { id } = useParams()
  const [product, setproduct] = useState({
    title: "",
    description: "",
  })
  const [error, seterror] = useState("");

  useEffect(() => {
    dispatch(productDetails(id))
  }, [id])

  useEffect(() => {
    if (det !== null) {
      setproduct({
        title: det?.title,
        description: det?.description,
      });
    }
  }, [det]);

  const changingData = (e) => {
    const { name, value } = e.target;

    if (name === "title") {
      setproduct({ ...product, title: value });
      seterror({ ...error, title: value.length === 0 ? "Title is important" : "" });
    } else if (name === "description") {
      setproduct({ ...product, description: value });
      seterror({ ...error, description: value.length === 0 ? "Description is important" : "" });
    }
  }

  const validation = () => {
    let error = {}
    if (!product.title) {
      error.title = "Please write the title";
    }
    if (!product.description) {
      error.description = "Please write the description";
    }
    return error;
  }

  const submit = (e) => {
    e.preventDefault();
    seterror(validation());

    let formData = new FormData();
    formData.append("title", product.title);
    formData.append("description", product.description);
    if (img) {
      formData.append("image", img);
    } else {
      formData.append("image", det.image);
    }
    formData.append("id", id);
    dispatch(update(formData));
  };

  return (
    <>
      <section id="breadcrumbs" class="breadcrumbs">
        <div class="container">
          <div class="d-flex justify-content-between align-items-center">
            <h2>Update</h2>
            <ol>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/list">Product List</Link></li>
            </ol>
          </div>
        </div>
      </section>
      <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: "70vh" }}>
        <form style={{ width: "50%" }}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Title
            </label>
            <input
              type="text"
              name="title"
              value={product.title}
              onChange={changingData}
              className="form-control"
              id="exampleInputEmail1"
            />
            <span style={{ color: 'red' }}>{error.title}</span>
          </div>
          <div className="mb-4">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Description
            </label>
            <input
              type="text"
              name="description"
              value={product.description}
              onChange={changingData}
              className="form-control"
              id="exampleInputPassword1"
            />
            <span style={{ color: 'red' }}>{error.description}</span>
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
              Image
            </label>
            <input
              type="file"
              onChange={(e) => setimg(e.target.files[0])}
              name="img"
              accept="image/*"
              class="form-control"
            />
            {img !== "" && img !== undefined && img !== null ? (
                        <img
                            height="40px"
                            src={URL.createObjectURL(img)}
                            alt=""
                            className="upload-img"
                        />
                    ) : (
                        <>
                            {det?.image !== "" ? (
                                <img
                                    height="70px"
                                    src={`https://wtsacademy.dedicateddevelopers.us/uploads/product/${det?.image}`}
                                    alt=""
                                    className="upload-img"
                                />
                            ) : (
                                <img
                                  height="90px"
                                   
                                    alt=""
                                     className="upload-img"
                                />
                            )}
                        </>
                    )}
                    {img === "" && <p>Drag or drop content here</p>}
                </div>

          
          <button type="submit" onClick={submit} className="btn btn-success">
           {/* <Link to='/list' style={{color:"white"}}>Update</Link> */}
           Update
          </button>
        </form>
      </div>
      <h5 style={{ fontSize: "16px", margin: "20px 0", textAlign: "center" }}>Go to the <Link to="/list">List</Link></h5>
    </>
  )
}
