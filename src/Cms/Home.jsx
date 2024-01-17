import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate, Link } from 'react-router-dom'
import { Token_remove } from '../Redux/AuthSlice'

export default function Home() {
  
  return (
    <div>
      <section id="hero">
        <div
          id="heroCarousel"
          className="carousel slide carousel-fade"
          data-ride="carousel"
        >
          <div className="carousel-inner" role="listbox">
            {/* Slide 1 */}
            <div
              className="carousel-item active"
              style={{ backgroundImage: "url(assets/img/slide/carousel-1.jpg)" }}
            >
              <div className="carousel-container">
                <div className="carousel-content animate__animated animate__fadeInUp">
                  <h2>
                    Welcome to <span>Company</span>
                  </h2>
                  <p>
                    Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et
                    est quaerat sequi nihil ut aliquam. Occaecati alias dolorem
                    mollitia ut. Similique ea voluptatem. Esse doloremque accusamus
                    repellendus deleniti vel. Minus et tempore modi architecto.
                  </p>
                  <div className="text-center">
                    <a href="" className="btn-get-started">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* Slide 2 */}
            <div
              className="carousel-item"
              style={{ backgroundImage: "url(assets/img/slide/slide-2.jpg)" }}
            >
              <div className="carousel-container">
                <div className="carousel-content animate__animated animate__fadeInUp">
                  <h2>Lorem Ipsum Dolor</h2>
                  <p>
                    Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et
                    est quaerat sequi nihil ut aliquam. Occaecati alias dolorem
                    mollitia ut. Similique ea voluptatem. Esse doloremque accusamus
                    repellendus deleniti vel. Minus et tempore modi architecto.
                  </p>
                  <div className="text-center">
                    <a href="" className="btn-get-started">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* Slide 3 */}
            <div
              className="carousel-item"
              style={{ backgroundImage: "url(assets/img/slide/slide-3.jpg)" }}
            >
              <div className="carousel-container">
                <div className="carousel-content animate__animated animate__fadeInUp">
                  <h2>Sequi ea ut et est quaerat</h2>
                  <p>
                    Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et
                    est quaerat sequi nihil ut aliquam. Occaecati alias dolorem
                    mollitia ut. Similique ea voluptatem. Esse doloremque accusamus
                    repellendus deleniti vel. Minus et tempore modi architecto.
                  </p>
                  <div className="text-center">
                    <a href="" className="btn-get-started">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#heroCarousel"
            role="button"
            data-slide="prev"
          >
            <span
              className="carousel-control-prev-icon icofont-simple-left"
              aria-hidden="true"
            />
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#heroCarousel"
            role="button"
            data-slide="next"
          >
            <span
              className="carousel-control-next-icon icofont-simple-right"
              aria-hidden="true"
            />
            <span className="sr-only">Next</span>
          </a>
          <ol className="carousel-indicators" id="hero-carousel-indicators" />
        </div>
      </section>
      <>
  {/* Facts Start */}
  <div className="section-title" style={{marginTop:"20px"}}>
      <h2>Facts</h2>
    </div>
  <div className="container-xxl py-6">
    <div className="container">
      <div className="row g-8">
        <div className="col-lg-3 col-md-6 wow fadeIn" data-wow-delay="0.1s" style={{borderRadius:"10px",border:"0.7px solid gray"}}>
          <div className="fact-item bg-light rounded text-center h-100 p-5">
            <i className="fa fa-certificate fa-4x text-primary mb-4" />
            <p className="mb-2 text-success">Years Experience</p>
            <h1 className="display-5 mb-0 text-success"   data-toggle="counter-up">
              50
            </h1>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 wow fadeIn" data-wow-delay="0.3s"  style={{borderRadius:"10px",border:"0.7px solid gray"}} >
          <div className="fact-item bg-light rounded text-center h-100 p-5">
            <i className="fa fa-users fa-4x text-primary mb-4" />
            <p className="mb-2 text-success">Skilled Professionals</p>
            <h1 className="display-5 mb-0 text-success"   data-toggle="counter-up">
              175
            </h1>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 wow fadeIn" data-wow-delay="0.5s" style={{borderRadius:"10px",border:"0.7px solid gray"}}>
          <div className="fact-item bg-light rounded text-center h-100 p-5">
            <i className="fa fa-bread-slice fa-4x text-primary mb-4" />
            <p className="mb-2 text-success">Total Products</p>
            <h1 className="display-5 mb-0 text-success" data-toggle="counter-up">
              135
            </h1>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 wow fadeIn" data-wow-delay="0.7s"  style={{borderRadius:"10px",border:"0.7px solid gray"}}>
          <div className="fact-item bg-light rounded text-center h-100 p-5">
            <i className="fa fa-cart-plus fa-4x text-primary mb-4" />
            <p className="mb-2 text-success">Order Everyday</p>
            <h1 className="display-5 mb-0 text-success" data-toggle="counter-up">
              9357
            </h1>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Facts End */}

  <>
  <>
  <section id="about-us" className="about-us">
  <div className="container" data-aos="fade-up">
    <div className="section-title">
      <h2>About Us</h2>
    </div>
    <div className="row content">
      <div className="col-lg-6" data-aos="fade-right">
        <h2>Eum ipsam laborum deleniti velitena</h2>
        <h3>
          Voluptatem dignissimos provident quasi corporis voluptates sit assum
          perenda sruen jonee trave
        </h3>
      </div>
      <div className="col-lg-6 pt-4 pt-lg-0" data-aos="fade-left">
        <p>
          Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
          irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
          fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
          sunt in culpa qui officia deserunt mollit anim id est laborum
        </p>
        <ul>
          <li>
            <i className="ri-check-double-line" /> Ullamco laboris nisi ut
            aliquip ex ea commodo consequa
          </li>
          <li>
            <i className="ri-check-double-line" /> Duis aute irure dolor in
            reprehenderit in voluptate velit
          </li>
          <li>
            <i className="ri-check-double-line" /> Ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in
          </li>
        </ul>
        <p className="font-italic">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    </div>
  </div>
</section>
<>
  {/* ======= Our Team Section ======= */}
  <section id="team" className="team section-bg">
    <div className="container">
      <div className="section-title" data-aos="fade-up">
        <h2>
          Our <strong>Team</strong>
        </h2>
        <p>
          Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
          aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
          quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
          fugiat sit in iste officiis commodi quidem hic quas.
        </p>
      </div>
      <div className="row">
        <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
          <div className="member" data-aos="fade-up">
            <div className="member-img">
              <img
                src="assets/img/team/team-1.jpg"
                className="img-fluid"
                alt=""
              />
              <div className="social">
                <a href="">
                  <i className="icofont-twitter" />
                </a>
                <a href="">
                  <i className="icofont-facebook" />
                </a>
                <a href="">
                  <i className="icofont-instagram" />
                </a>
                <a href="">
                  <i className="icofont-linkedin" />
                </a>
              </div>
            </div>
            <div className="member-info">
              <h4>Walter White</h4>
              <span>Chief Executive Officer</span>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
          <div className="member" data-aos="fade-up" data-aos-delay={100}>
            <div className="member-img">
              <img
                src="assets/img/team/team-2.jpg"
                className="img-fluid"
                alt=""
              />
              <div className="social">
                <a href="">
                  <i className="icofont-twitter" />
                </a>
                <a href="">
                  <i className="icofont-facebook" />
                </a>
                <a href="">
                  <i className="icofont-instagram" />
                </a>
                <a href="">
                  <i className="icofont-linkedin" />
                </a>
              </div>
            </div>
            <div className="member-info">
              <h4>Sarah Jhonson</h4>
              <span>Product Manager</span>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
          <div className="member" data-aos="fade-up" data-aos-delay={200}>
            <div className="member-img">
              <img
                src="assets/img/team/team-3.jpg"
                className="img-fluid"
                alt=""
              />
              <div className="social">
                <a href="">
                  <i className="icofont-twitter" />
                </a>
                <a href="">
                  <i className="icofont-facebook" />
                </a>
                <a href="">
                  <i className="icofont-instagram" />
                </a>
                <a href="">
                  <i className="icofont-linkedin" />
                </a>
              </div>
            </div>
            <div className="member-info">
              <h4>William Anderson</h4>
              <span>CTO</span>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
          <div className="member" data-aos="fade-up" data-aos-delay={300}>
            <div className="member-img">
              <img
                src="assets/img/team/team-4.jpg"
                className="img-fluid"
                alt=""
              />
              <div className="social">
                <a href="">
                  <i className="icofont-twitter" />
                </a>
                <a href="">
                  <i className="icofont-facebook" />
                </a>
                <a href="">
                  <i className="icofont-instagram" />
                </a>
                <a href="">
                  <i className="icofont-linkedin" />
                </a>
              </div>
            </div>
            <div className="member-info">
              <h4>Amanda Jepson</h4>
              <span>Accountant</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* End Our Team Section */}
</>


  {/* End #main */}
</>

</>

</>

    </div>
  )
}
