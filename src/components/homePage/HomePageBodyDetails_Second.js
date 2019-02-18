import React, { Component } from 'react';

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
class HomePageBodyDetails_Second extends React.Component {
  render() {
    return (
      //<!-- Start feature Area -->
      <section class="feature-area">
        <div class="container">
          <div class="row">
            <div class="col-lg-4">
              <div class="single-feature">
                <Link to="/contact">
                  <div class="title">
                    <h4>Why VWCS?</h4>
                  </div>
                </Link>
                <div class="desc-wrap">
                  <p>
                    We provides the best classroom and simulator training by highly experienced lecturers which makes, easy to understand.
                  </p>

                  <Link to="/contact">Join Now</Link>
                </div>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="single-feature">
                <Link to="/contact">
                  <div class="title">
                    <h4>IADC Wellsharp Certified</h4>
                  </div>
                </Link>
                <div class="desc-wrap">
                  <p>For many of us, our very first experience of learning about the celestial bodies begins when we saw our first.</p>
                  <Link to="/contact">Join Now</Link>
                </div>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="single-feature">
                <Link to="/contact">
                  <div class="title">
                    <h4>IWCF Certified</h4>
                  </div>
                </Link>
                <div class="desc-wrap">
                  <p>If you are a serious astronomy fanatic like a lot of us are, you can probably remember that one event.</p>
                  <Link to="/contact">Join Now</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      //<!-- End feature Area -->
    );
  }
}

export default HomePageBodyDetails_Second;
