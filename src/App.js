import logo from './logo.svg';
import './App.css';
import Header from './Layout/Header';
import Footer from './Layout/Footer';

import { Suspense, lazy, useEffect } from 'react';
import { Navigate, BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Check_Token } from './Redux/AuthSlice';
import { useDispatch } from 'react-redux';

function App() {

  const dispatch=useDispatch()

  const Home = lazy(() => import('./Cms/Home'))
  const Login = lazy(() => import('./Auth/Login'))
  const Register = lazy(() => import('./Auth/Register'))
  const Create = lazy(() => import('./Cms/Create'))
  const List = lazy(() => import('./Cms/List'))
  const Update=lazy(()=>import('./Cms/Update'))
  const Products=lazy(()=>import('./Cms/Ourproducts'))
  const PrivateRoute = ({ children }) => {
    const token = localStorage.getItem('token') || sessionStorage.getItem('token')
    return token !== null && token !== undefined ? (
      children
    ) :
      <>
        <Navigate to='/' />
        {alert("Login in first to access")}
      </>
  }


  const Publicnames = [
    {
      path: "/",
      Component: <Home />
    },

    {
      path: "/login",
      Component: <Login />
    },
    {
      path: "/register",
      Component: <Register />
    },
    {
      path:"/product",
      Component:<Products/>
    }
  ]
  const Privatenames = [
    {
      path: "/create",
      Component: <Create />
    },
    {
      path: "/list",
      Component: <List />
    },
    {
      path:"/update/:id",
      Component:<Update/>
    }
  ]
  useEffect(()=>{
    dispatch(Check_Token())
  })
  return (

    <>
      <Suspense fallback={<h2>Loading....</h2>}>
        <Router>
          <Header />
          <Routes>
            {Publicnames.map((route) => (
              <Route path={route.path} element={route.Component} />
            ))}

            {Privatenames.map((route) => (
              <Route path={route.path}
                element={<PrivateRoute>{route.Component}</PrivateRoute>} />
            ))}
          </Routes>
          <Footer />
        </Router>
      </Suspense>

    </>

  );
}

export default App;
