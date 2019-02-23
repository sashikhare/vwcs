import React, { Component } from 'react';

import '../../css/linearicons.css';
import '../../css/font-awesome.min.css';
import '../../css/bootstrap.css';
import '../../css/magnific-popup.css';
import '../../css/nice-select.css';
import '../../css/animate.min.css';
import '../../css/owl.carousel.css';
import '../../css/jquery-ui.css';
import '../../css/main.css';
class CourseThirdPageBodyDetails_Third extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      date: null,
      error: null,
    };
  }
  componentDidMount() {
    fetch('http://vwcs.in/courseThree_api')
      .then(response => response.json())
      .then(data => this.setState({ date: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));

      fetch('http://www.vwcs.in/courseThree_api')
      .then(response => response.json())
      .then(data => this.setState({ date: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  render() {
    console.log('Data', this.state.date);
    const { isLoading, date, error } = this.state;
    return (
      <section>
        <p>
          <a />
        </p>
        <div class="container" class="header-gap">
          <div class="row d-flex justify-content-center">
            <table border="1" widith="200">
              <th>
                <td>
                  <h5>Start Date</h5>
                </td>
              </th>
              <th>
                <td>
                  <h5>End Date</h5>
                </td>
              </th>
              <th>
                <td>
                  <h5>Location</h5>
                </td>
              </th>

              {!isLoading && date
                ? date.result.map(user => {
                    const { course_start_date, course_end_date, Location } = user;
                    return (
                      <tr widith="70%">
                        <td>{course_start_date}</td>
                        <td>{course_end_date}</td>
                        <td>{Location}</td>
                      </tr>
                    );
                  })
                : null}
            </table>
          </div>
        </div>
      </section>
    );
  }
}

export default CourseThirdPageBodyDetails_Third;
