import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import * as emailjs from "emailjs-com";
import * as Scroll from 'react-scroll';


import "../../css/linearicons.css"
import "../../css/font-awesome.min.css"
import "../../css/bootstrap.css";
import "../../css/magnific-popup.css";
import "../../css/nice-select.css"
import "../../css/animate.min.css";
import "../../css/owl.carousel.css"
import "../../css/jquery-ui.css"
import "../../css/main.css"

const AnyReactComponent = ({ text }) => <div>{text}</div>;
let scroll     = Scroll.animateScroll;
class ContactPageBodyDetails_Second extends React.Component {
	backtotop = event => {
		scroll.scrollToTop();
	}
	constructor(props) {
		super(props);
		this.state = {
		  email: "",
		  name: "",
		  mob: "",
		  message: ""
		};
	
		this.handleName = this.handleName.bind(this);
		this.handleEmail = this.handleEmail.bind(this);
		this.handleMob = this.handleMob.bind(this);
		this.handleMessage = this.handleMessage.bind(this);
	  }
	  handleName(event) {
		this.setState({ name: event.target.value });
	  }
	  handleEmail(event) {
		this.setState({ email: event.target.value });
	  }
	  handleMob = event => {
		this.setState({ mob: event.target.value });
	  };
	  handleMessage = event => {
		this.setState({ message: event.target.value });
	  };
	  sendEmail = event => {
		alert("Thank you for enquiry");
		var service_id = "sashikhare";
		var template_id = "template_4j5BUMAI";
		var userID = "user_LDkVscDCpQghJzQdxJpwi";
	
		var template_params = {
		  from_name: this.state.name,
		  from_email: this.state.email,
		  reply_to: "sany.m@peopleinteractive.in",
		  from_mob: this.state.mob,
		  message_html: this.state.message
		};
	
		console.log(template_params);
		emailjs.send(service_id, template_id, template_params, userID);
		this.state.sentmessage = "Message sent";
		this.setState({ sentmessage: this.state.sentmessage });
	  };

	render() {
		return (
			<div class="contact-page-area section-gap">
				<div class="container">
					<div class="row">

						<div class="col-lg-4 d-flex flex-column address-wrap">
							<div class="single-contact-address d-flex flex-row">
								<div class="icon">
									<span class="lnr lnr-home"></span>
								</div>
								<div class="contact-details">
									<h5>Mumbai, India</h5>
									<p>
										502/503, 5th Floor, Span Landmark Building,
										Andheri Kurla Road, Chakala, Andheri(East),
										Pincode 400093
									</p>
								</div>
							</div>
							<div class="single-contact-address d-flex flex-row">
								<div class="icon">
									<span class="lnr lnr-phone-handset"></span>
								</div>
								<div class="contact-details">
									<h5>+91 (961) 9123 321</h5>
									<h5>+91 (900) 4935 111</h5>
									<p>Mon to Sat 9am to 6 pm</p>
								</div>
							</div>
							<div class="single-contact-address d-flex flex-row">
								<div class="icon">
									<span class="lnr lnr-envelope"></span>
								</div>
								<div class="contact-details">
									<h5>info@vwcs.in</h5>
									<p>Send us your query anytime!</p>
								</div>
							</div>
						</div>
						<div class="col-lg-8">
							<form class="form-area contact-form text-right" id="myForm" method="post">
								<div class="row">
									<div class="col-lg-6 form-group">
										<input name="name" placeholder="Enter your name" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter your name'" class="common-input mb-20 form-control" required="" type="text" value={this.state.name} onChange={this.handleName}/>

										<input name="email" placeholder="Enter email address" pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter email address'" class="common-input mb-20 form-control" required="" type="email" value={this.state.email} onChange={this.handleEmail}/>

										<input name="mobileno" maxlength="14" placeholder="Enter mobile no" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter subject'" class="common-input mb-20 form-control" required="" type="text" value={this.state.mob} onChange={this.handleMob}/>
									</div>
									<div class="col-lg-6 form-group">
										<textarea class="common-textarea form-control" name="message" placeholder="Enter Messege" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter Messege'" required="" value={this.state.message} onChange={this.handleMessage}></textarea>
									</div>
									<div class="col-lg-12">
										<div class="alert-msg"></div>
										<Link to="/" onClick={this.backtotop}><label class="genric-btn primary" onClick={this.sendEmail}>Send Message</label></Link>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
export default ContactPageBodyDetails_Second;
