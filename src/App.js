import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

// import AddCourse from "./components.add-course.component";
// import CourseDEtail from "./components.course.component";
import CourseList from "./components/courses-list.component";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav className="navbar navbar-expand navbar-dark bg-dark">
            <a href="/courses" className="navbar-brand">
              Courses
            </a>
          </nav>

          <Switch>
            <Route exact path={["/", "/courses"]} component={CourseList} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
