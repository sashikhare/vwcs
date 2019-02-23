import React, { Component } from 'react';
import * as Scroll from 'react-scroll';

import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import '../../css/linearicons.css';
import '../../css/font-awesome.min.css';
import '../../css/bootstrap.css';
import '../../css/magnific-popup.css';
import '../../css/nice-select.css';
import '../../css/animate.min.css';
import '../../css/owl.carousel.css';
import '../../css/jquery-ui.css';
import '../../css/main.css';

let scroll = Scroll.animateScroll;

class CoursesPageBodyDetails_Second extends React.Component {
  backtotop = event => {
    scroll.scrollToTop();
  };
  render() {
    return (
      <section class="popular-courses-area section-gap courses-page">
        <div class="container">
          <div class="row d-flex justify-content-center">
            <div class="menu-content pb-70 col-lg-8">
              <div class="title text-center">
                <h1 class="mb-10">Popular Courses we offer</h1>
                <p>There is a moment in the life of any aspiring.</p>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="single-popular-carusel col-lg-3 col-md-6">
              <div class="thumb-wrap relative">
                <div class="thumb relative">
                  <div class="overlay overlay-bg" />
                  <Link to="/courseOne" onClick={this.backtotop}>
                    <img class="img-fluid" src="img/p1.jpg" alt="" />
                  </Link>
                </div>
                <div class="meta d-flex justify-content-between">
                  <p>
                    <span>Duration: 5 Days</span>
                  </p>
                  <span>
                    <h4>₹64900</h4>
                  </span>
                </div>
              </div>
              <div class="details">
                <Link to="/courseOne" onClick={this.backtotop}>
                  <h4>
                    IWCF - Surface Stack
                    <p>Level 2</p>
                  </h4>
                </Link>
                <p align="justify">
                  The objective is to lay a solid foundation in well control concepts and competency for entry-level rig operation positions
                  as well as those not directly associated with rig operation, such as office personnel
                </p>
              </div>
            </div>
            <div class="single-popular-carusel col-lg-3 col-md-6">
              <div class="thumb-wrap relative">
                <div class="thumb relative">
                  <div class="overlay overlay-bg" />
                  <Link to="/courseSecond" onClick={this.backtotop}>
                    <img class="img-fluid" src="img/p3.jpg" alt="" />
                  </Link>
                </div>
                <div class="meta d-flex justify-content-between">
                  <p>
                    <span>Duration: 5 Days</span>
                  </p>
                  <span>
                    <h4>₹70800</h4>
                  </span>
                </div>
              </div>
              <div class="details">
                <Link to="/courseSecond" onClick={this.backtotop}>
                  <h4>IWCF - Combined Surface & Subsea Stack Level 2</h4>
                </Link>
                <p align="justify">
                  The objective of this training is to increase the candidates knowledge and understanding of well control theory, practice
                  and equipment.It's recommended for those who taking IWCF Well Control Course in L3 & L4
                </p>
              </div>
            </div>
            <div class="single-popular-carusel col-lg-3 col-md-6">
              <div class="thumb-wrap relative">
                <div class="thumb relative">
                  <div class="overlay overlay-bg" />
                  <Link to="/courseThird" onClick={this.backtotop}>
                    <img class="img-fluid" src="img/p2.jpg" alt="" />
                  </Link>
                </div>
                <div class="meta d-flex justify-content-between">
                  <p>
                    <span>Duration: 5 Days</span>
                  </p>
                  <span>
                    <h4>₹70800</h4>
                    <h4>$1000</h4>
                  </span>
                </div>
              </div>
              <div class="details">
                <Link to="/courseThird" onClick={this.backtotop}>
                  <h4>
                    IWCF - Surface Stack
                    <p>Level 3 & 4</p>
                  </h4>
                </Link>
                <p align="justify">
                  The objective of this course is to teach well control competency to drillers and others requiring a Level 3 certification.
                  A secondary objective is to prepare participants for the IWCF Well Control exams.
                </p>
              </div>
            </div>

            <div class="single-popular-carusel col-lg-3 col-md-6">
              <div class="thumb-wrap relative">
                <div class="thumb relative">
                  <div class="overlay overlay-bg" />
                  <Link to="/courseFour" onClick={this.backtotop}>
                    <img class="img-fluid" src="img/p4.jpg" alt="" />
                  </Link>
                </div>
                <div class="meta d-flex justify-content-between">
                  <p>
                    <span>Duration: 5 Days</span>
                  </p>
                  <span>
                    <h4>₹76700</h4>
                    <h4>$1200</h4>
                  </span>
                </div>
              </div>
              <div class="details">
                <Link to="/courseFour" onClick={this.backtotop}>
                  <h4>IWCF - Combined Surface & Subsea Stack: Level 3 & 4</h4>
                </Link>
                <p align="justify">
                  The objective of this course is to teach well control competency to drillers and others requiring a Level 3 certification.
                  A secondary objective is to prepare participants for the IWCF Well Control exams.
                </p>
              </div>
            </div>
            <div class="single-popular-carusel col-lg-3 col-md-6">
              <div class="thumb-wrap relative">
                <div class="thumb relative">
                  <div class="overlay overlay-bg" />
                  <Link to="/courseFive" onClick={this.backtotop}>
                    <img class="img-fluid" src="img/p5.jpg" alt="" />
                  </Link>
                </div>
                <div class="meta d-flex justify-content-between">
                  <p>
                    <span>Duration: 5 Days</span>
                  </p>
                  <span>
                    <h4>₹64900</h4>
                  </span>
                </div>
              </div>
              <div class="details">
                <Link to="/courseFive" onClick={this.backtotop}>
                  <h4>
                    IDAC - Surface Stack
                    <p>Introductory Level</p>
                  </h4>
                </Link>
                <p align="justify">
                  This course is strongly recommended for first time well control candidates and prior to taking IDAC Well Cap Course in
                  Fundamental Level & Supervisory Level.This help's the candidate to deal with most critical situations.
                </p>
              </div>
            </div>
            <div class="single-popular-carusel col-lg-3 col-md-6">
              <div class="thumb-wrap relative">
                <div class="thumb relative">
                  <div class="overlay overlay-bg" />
                  <Link to="/courseSix" onClick={this.backtotop}>
                    <img class="img-fluid" src="img/p6.jpg" alt="" />
                  </Link>
                </div>
                <div class="meta d-flex justify-content-between">
                  <p>
                    <span>Duration: 5 Days</span>
                  </p>
                  <span>
                    <h4>₹70800</h4>
                    <h4>$1000</h4>
                  </span>
                </div>
              </div>
              <div class="details">
                <Link to="/courseSix" onClick={this.backtotop}>
                  <h4>
                    IDAC - Surface Stack
                    <p>Fundamental & Supervisory Level</p>
                  </h4>
                </Link>

                <p align="justify">
                  A secondary objective is to prepare participants for the IDAC Well Cap exams.Certification is given for Surface or
                  Combined Surface and Subsea
                </p>
              </div>
            </div>
            <div class="single-popular-carusel col-lg-3 col-md-6">
              <div class="thumb-wrap relative">
                <div class="thumb relative">
                  <div class="overlay overlay-bg" />
                  <Link to="/courseSeven" onClick={this.backtotop}>
                    <img class="img-fluid" src="img/p7.jpg" alt="" />
                  </Link>
                </div>
                <div class="meta d-flex justify-content-between">
                  <p>
                    <span>Duration: 5 Days</span>
                  </p>
                  <span>
                    <h4>₹76700</h4>
                    <h4>$1200</h4>
                  </span>
                </div>
              </div>
              <div class="details">
                <Link to="/courseSeven" onClick={this.backtotop}>
                  <h4>IDAC - Combined Surface & Subsea Stack: Fundamental & Supervisory Level</h4>
                </Link>
                <p>When television was young, there was a hugely popular show based on the still popular fictional characte</p>
              </div>
            </div>
            <div class="single-popular-carusel col-lg-3 col-md-6">
              <div class="thumb-wrap relative">
                <div class="thumb relative">
                  <div class="overlay overlay-bg" />
                  <Link to="/courseEight" onClick={this.backtotop}>
                    <img class="img-fluid" src="img/p8.jpg" alt="" />
                  </Link>
                </div>
                <div class="meta d-flex justify-content-between">
                  <p>
                    <span>Duration: 5 Days</span>
                  </p>
                  <span>
                    <h4>₹11800</h4>
                  </span>
                </div>
              </div>
              <div class="details">
                <Link to="/courseEight" onClick={this.backtotop}>
                  <h4>HSC Rig Pass</h4>
                </Link>
                <div class="container">
                  When television was young, there was a hugely popular show based on the still popular fictional characte
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default CoursesPageBodyDetails_Second;
