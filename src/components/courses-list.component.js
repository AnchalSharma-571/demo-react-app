import React, { Component } from "react";
//import CourseDataService from "../services/Course-service";
import axios from "axios";
export default class CourseList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      courses: [],
      isLoaded: false,
    };
  }
  componentDidMount() {
    axios
      .get("http:http://localhost:8080/courses")
      .then((res) => {
        this.setState({ courses: res.data });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    var { isLoaded, courses } = this.state;

    if (!isLoaded) {
      return <div>Loading....</div>;
    } else {
      return (
        <div className="App">
          <ul>
            {courses.map((course) => (
              <li key={course.id}></li>
            ))}
            ;
          </ul>
        </div>
      );
    }
  }
}
