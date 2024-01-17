import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { list, remove } from '../Redux/CrudSlice';
import SweetAlertComponent from './SweetAlert';
import { Link } from 'react-router-dom';
import { productu } from '../Redux/Helper';
// import { reset_redirectTo } from '../Redux/AuthSlice';
import './Product.css';


export default function Products() {
  const {totalRecords, totalPages } = useSelector(
    (state) => state.Crud
  );
  const dispatch = useDispatch();
  const [delete_id, setDelete_id] = useState('');
  const [isDelete, setIsDelete] = useState(false);
  const { listData } = useSelector((state) => state.Crud);
 

  useEffect(() => {
    dispatch(list());
  }, []);

  const delete_func = (id) => {
    if (delete_id !== '') {
      dispatch(remove({ id: delete_id })).then(() => {
        dispatch(list());
      });
    }
    setDelete_id('');
    setIsDelete(false);
  };

  // useEffect(() => {
  //   dispatch(reset_redirectTo(null));
  // }, []);

  return (
    <>
      <main id="main">
        <section id="breadcrumbs" className="breadcrumbs">
          <div className="container">
            <div className="d-flex justify-content-between align-items-center">
              <h2>Product List</h2>
              <ol>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to='/create'>Product List</Link>
                </li>
              </ol>
            </div>
          </div>
        </section>
        <div className="container" style={{marginTop:"30px"}}>
      <div className="row">
        {listData.map((item) => (
          <div className="col-md-3" style={{}} key={item._id}>
            <div className="card" style={{ marginBottom: '20px',border:"1px solid gray",borderRadius:"10px",gap:"2px" }}>
              <img src={productu(item.image)} className="card-img-top" alt={item.title} style={{ height: '200px',  width :"250px",objectFit: 'cover' }} />
              <div className="card-body" style={{backgroundColor:"greenyellow"}}>
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">{item.description}</p>
                <button className="btn btn-success">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {listData.length === 0 && <p>No data found</p>}
    </div>

        
      </main>
    </>
  );
}
