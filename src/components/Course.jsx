import { useState, useEffect } from "react";
import courseService from "../services/courses";
import { useMatch, Link, useNavigate } from "react-router-dom";

const Course = () => {
  const navigate = useNavigate();

  const match = useMatch("/courses/:id");
  const courseId = match.params.id;

  const [course, setCourse] = useState(null);

  useEffect(() => {
    courseService.getById(courseId).then((course) => {
      setCourse(course);
    });
  }, [courseId]);

  const onDelete = () => {
    console.log("onDelete");
    if (confirm(`Delete course '${course.name}'?`) === true) {
      courseService.remove(course);
      navigate("/");
    }
  };

  if (!course) return;

  return (
    <div id="content">
      <h2>{course.name}</h2>
      <p>{course.description}</p>

      <div>
        <Link to={`/courses/${courseId}/new-assignment`}>
          <button>New assignment</button>
        </Link>
        <button onClick={onDelete}>Delete course</button>
      </div>

      <h3>Assignments</h3>

      {course.assignments.map((assg) => (
        <div key={assg._id}>
          <Link to={`/assignments/${assg._id}`}>{assg.name}</Link>
        </div>
      ))}
    </div>
  );
};

export default Course;
