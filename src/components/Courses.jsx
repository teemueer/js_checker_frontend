import { useState, useEffect } from "react";
import courseService from "../services/courses";
import { Link } from "react-router-dom";

const Courses = ({ user }) => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    courseService.get().then((courses) => setCourses(courses));
  }, []);

  return (
    <div className="m-4 w-1/2">
      <h2 className="mb-4 text-2xl font-bold">My courses</h2>

      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Assignments
              </th>
              <th scope="col" className="px-6 py-3">
                Description
              </th>
            </tr>
          </thead>
          <tbody>
            {courses.map((course) => (
              <tr
                key={course._id}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
              >
                <td
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  <Link to={`/courses/${course._id}`}>{course.name}</Link>
                </td>
                <td className="px-6 py-4">{course.assignments.length}</td>
                <td className="px-6 py-4">{course.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div>
        <Link to="/new-course">
          <button className="m-2 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
            + New course
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Courses;
