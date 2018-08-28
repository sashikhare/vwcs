import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
//import registerServiceWorker from './registerServiceWorker';

import CourseOnePageBodyDetails_First from "./components/courseOnePage/CourseOnePageBodyDetails_First"
import CourseOnePageBodyDetails_Second from "./components/courseOnePage/CourseOnePageBodyDetails_Second"

import FooterDetails from "./components/genric/FooterDetails"



class CourseOnePage extends React.Component {
    render() {
      return (
          
        <div>
          
          <CourseOnePageBodyDetails_First></CourseOnePageBodyDetails_First>
          <CourseOnePageBodyDetails_Second></CourseOnePageBodyDetails_Second>
          
          <FooterDetails></FooterDetails>
          
        </div>
        
      );
    }
  }

  export default CourseOnePage

