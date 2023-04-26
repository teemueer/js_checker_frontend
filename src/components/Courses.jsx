import { useState, useEffect } from "react";
import courseService from "../services/courses";
import { Link } from "react-router-dom";

const Courses = ({ user }) => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    courseService.get().then((courses) => setCourses(courses));
  }, []);

  return (
    <div id="content">
      <Link to="/new-course">
        <button>New course</button>
      </Link>
      <h2>Courses</h2>
      {courses.map((course) => (
        <div key={course._id}>
          <Link to={`/courses/${course._id}`}>{course.name}</Link>
        </div>
      ))}
    </div>
  );
};

export default Courses;
