import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { list, remove } from '../Redux/CrudSlice';
import SweetAlertComponent from './SweetAlert';
import { Link } from 'react-router-dom';
import { productu } from '../Redux/Helper';
// import { reset_redirectTo } from '../Redux/AuthSlice';


export default function List() {
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
                  <Link to='/create'>Create-Product</Link>
                </li>
              </ol>
            </div>
          </div>
        </section>
        <div className="container" style={{border:"2px solid gray",margin:"10px auto",borderRadius:"10px"}}>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Image</th>
                <th scope="col">Title</th>
                <th scope="col">Description</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {listData.map((i) => (
                totalRecords >= 1 ? (
                  <tr key={i._id}>
                    
                    <td><img src={productu(i.image)} style={{width:"50px",height:"50px"}}/></td>
                    
                    <td>{i.title}</td>
                    <td>{i.description}</td>
                    <td>
                      <Link to={`/update/${i._id}`} className="btn btn-primary">
                        Update
                      </Link>
                    </td>
                    <td>
                      <Link
                        to="#"
                        onClick={() => {
                          setDelete_id(i._id);
                          setIsDelete(true);
                        }}
                        className="btn btn-danger"
                      >
                        Delete
                      </Link>
                    </td>
                  </tr>
                ) : (
                  <tr key={i._id}>
                    <td colSpan="4">NO DATA FOUND</td>
                  </tr>
                )
              ))}
            </tbody>
          </table>
        </div>

        {isDelete && (
          <SweetAlertComponent
            confirm={delete_func}
            cancel={() => setIsDelete(false)}
            title="Are you sure?"
            subtitle="You will not be able to recover!"
          />
        )}
      </main>
    </>
  );
}
