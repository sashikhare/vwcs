import React, { Component } from 'react';

import GoogleMapReact, { Marker } from 'google-map-react';

import '../../css/linearicons.css';
import '../../css/font-awesome.min.css';
import '../../css/bootstrap.css';
import '../../css/magnific-popup.css';
import '../../css/nice-select.css';
import '../../css/animate.min.css';
import '../../css/owl.carousel.css';
import '../../css/jquery-ui.css';
import '../../css/main.css';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class ContactPageBodyDetails_Third extends React.Component {
  static defaultProps = {
    center: {
      lat: 19.113579,
      lng: 72.862158,
      // key: 'AIzaSyDXG7p-SBffjB83tYH_BbSfdjq01ruPKW0',
    },
    zoom: 18,
  };
  renderMarkers(map, maps) {
    let marker = new maps.Marker({
      position: {
        lat: 19.113629,
        lng: 72.862165,
      },
      map,
      title: 'Vyas Well Control School & Consultancy Services',
    });
  }
  render() {
    return (
      <section class="contact-page-area section-gap">
        <div class="container">
          <div class="map-location">
            <GoogleMapReact
              apiKey={{key: 'AIzaSyDXG7p-SBffjB83tYH_BbSfdjq01ruPKW0'}}
              center={this.props.center}
              zoom={this.props.zoom}
              onGoogleApiLoaded={({ map, maps }) => this.renderMarkers(map, maps)}
            />
          </div>
        </div>
      </section>
    );
  }
}
export default ContactPageBodyDetails_Third;
