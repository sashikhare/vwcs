import React, { Component } from 'react';
import * as Scroll from 'react-scroll';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
//import {withRouter} from 'react-router-dom'

import '../../css/font_google.css';
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
class HeaderDetails extends React.Component {
  backtotop = event => {
    scroll.scrollToTop();
  };
  render() {
    return (
      <div>
        <button type="button" id="mobile-nav-toggle">
          <i class="lnr lnr-menu" />
        </button>
        <header id="header" id="home">
          <div class="header-top">
            <div class="container">
              <div class="row">
                <div class="col-lg-6 col-sm-6 col-8 header-top-left no-padding">
                  <ul>
                    <li>
                      <a href="https://www.facebook.com/vyaswellcontrolschool/">
                        <i class="fa fa-facebook" />
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="col-lg-6 col-sm-6 col-4 header-top-right no-padding">
                  <Link to="/" onClick={this.backtotop}>
                    <span class="lnr lnr-phone-handset" /> <span class="text">+91-9619123321/+91-9004935111/+91-9136370284</span>
                  </Link>
                  <Link to="/" onClick={this.backtotop}>
                    <span class="lnr lnr-envelope" /> <span class="text">info@vwcs.in</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div class="container main-menu">
            <div class="row align-items-center justify-content-between d-flex">
              <div id="logo">
                <Link to="/" onClick={this.backtotop}>
                  <img src="/img/logo.png" alt="" title="" />
                </Link>
              </div>
              <nav id="nav-menu-container">
                <ul class="nav-menu">
                  <li>
                    <Link to="/" onClick={this.backtotop}>
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link to="/courses" onClick={this.backtotop}>
                      Courses
                    </Link>
                  </li>
                  <li>
                    <Link to="/onlineCourses" onClick={this.backtotop}>
                      Online Courses
                    </Link>
                  </li>
                  <li>
                    <Link to="/studyMaterial" onClick={this.backtotop}>
                      Study Material
                    </Link>
                  </li>
                  <li class="menu-has-children">
                    <Link to="/courses" onClick={this.backtotop}>
                      Schedule
                    </Link>
                    <ul class="submenu">
                      <li>
                        <Link to="/courseOne" onClick={this.backtotop}>
                          IWCF - Surface Stack: Level 2
                        </Link>
                      </li>
                      <li>
                        <Link to="/courseSecond" onClick={this.backtotop}>
                          IWCF - Combined Surface & Subsea Stack: Level 2
                        </Link>
                      </li>
                      <li>
                        <Link to="/courseThird" onClick={this.backtotop}>
                          IWCF - Surface Stack: Level 3 & 4
                        </Link>
                      </li>
                      <li>
                        <Link to="/courseFour" onClick={this.backtotop}>
                          IWCF - Combined Surface & Subsea Stack: Level 3 & 4
                        </Link>
                      </li>
                      <li>
                        <Link to="/courseFive" onClick={this.backtotop}>
                          IADC - Surface Stack: Introductory Level
                        </Link>
                      </li>
                      <li>
                        <Link to="/courseSix" onClick={this.backtotop}>
                          IADC - Surface Stack: Fundamental & Supervisory Level
                        </Link>
                      </li>
                      <li>
                        <Link to="/courseSeven" onClick={this.backtotop}>
                          IADC - Combined Surface & Subsea Stack: Fundamental & Supervisory Level
                        </Link>
                      </li>
                      <li>
                        <Link to="/courseEight" onClick={this.backtotop}>
                          HSC Rig Pass
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link to="/gallery" onClick={this.backtotop}>
                      Gallery
                    </Link>
                  </li>
                  <li>
                    <Link to="/aboutus" onClick={this.backtotop}>
                      About us
                    </Link>
                  </li>
                  <li>
                    <Link to="/contact" onClick={this.backtotop}>
                      Contact us
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </header>
      </div>
    );
  }
}
export default HeaderDetails;
