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
class CourseFivePageBodyDetails_First extends React.Component {
  render() {
    return (
      <section class="banner-area relative about-banner" id="home">
        <div class="overlay overlay-bg" />
        <div class="container">
          <div class="row d-flex align-items-center justify-content-center">
            <div class="about-content col-lg-12">
              <h1 class="text-white">IADC - Surface Stack: Introductory Level</h1>
              <p class="text-white link-nav">
                <Link to="/">Home</Link> <span class="lnr lnr-arrow-right" /> <Link to="/courses"> Schedule</Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default CourseFivePageBodyDetails_First;
