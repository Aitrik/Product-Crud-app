import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Token_remove } from '../Redux/AuthSlice'
import { useDispatch, useSelector } from 'react-redux'
import { profile_pic } from '../Redux/Helper'


export default function Header() {
    const{isToggle}=useSelector((state)=>state.Auth)
    const userProfilePic = useSelector((state) => state.Auth?.userData?.profile_pic)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    
    const image = localStorage.getItem("profile_pic")

    const remove = () => {
        dispatch(Token_remove())
       
        
    }
    return (
        <div>
            <>
                {/* ======= Header ======= */}
                <header id="header" className="fixed-top">
                    <div className="container d-flex align-items-center">
                        <h1 className="logo mr-auto">
                            <Link to="/">
                                <span>AIT</span>RIK
                            </Link>


                        </h1>
                        {/* Uncomment below if you prefer to use an image logo */}
                        {/* <a href="index.html" class="logo mr-auto"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>*/}
                        <nav className="nav-menu d-none d-lg-block">
                            <ul>
                                <li>
                                    <Link to="/">Home</Link>
                                </li>
                                <li>
                                    <Link to="/create">Create-Product</Link>
                                </li>
                                <li>
                                    <Link to="/product">Our-Products</Link>
                                </li>
                                {isToggle ? (
                                    <li>
                                        <Link onClick={remove} to='/login'>Logout</Link>
                                    </li>

                                ) :
                                    (<li>
                                        <Link to="/login">Login</Link>
                                    </li>)
                                }
                                <li style={{width:"40px",height:"30px",borderRadius:"30px"}}>
                               {isToggle?(
                                 <img src={profile_pic(image)} style={{width:"40px",height:"30px",borderRadius:"30px",border:"none",cursor:"pointer"}}/>
                               ):(
                                <img src="images\NoImage2.jpg" style={{width:"40px",height:"30px",borderRadius:"30px",border:"none",cursor:"pointer"}}/>
                               )}
                               
                                </li>
                            </ul>
                        </nav>
                        {/* .nav-menu */}
                        <div className="header-social-links">
                            <a href="#" className="twitter">
                                <i className="icofont-twitter" />
                            </a>
                            <a href="#" className="facebook">
                                <i className="icofont-facebook" />
                            </a>
                            <a href="#" className="instagram">
                                <i className="icofont-instagram" />
                            </a>
                            <a href="#" className="linkedin">
                                <i className="icofont-linkedin" />
                            </a>
                        </div>
                    </div>
                </header>
                {/* End Header */}
            </>

        </div>
    )
}
