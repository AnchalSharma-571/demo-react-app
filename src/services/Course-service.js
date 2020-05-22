import http from "../http-common";

class CourseDataService {
  getAllCourses() {
    return http.get("/courses");
  }
}

export default new CourseDataService();
