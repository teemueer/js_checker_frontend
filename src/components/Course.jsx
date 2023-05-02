import { useState, useEffect } from "react";
import courseService from "../services/courses";
import studentService from "../services/student";
import { useMatch, Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";

const Course = () => {
  const navigate = useNavigate();
  const [t, i18n] = useTranslation("common");

  const match = useMatch("/courses/:id");
  const courseId = match.params.id;

  const [course, setCourse] = useState(null);
  const [students, setStudents] = useState(null);

  useEffect(() => {
    courseService.getById(courseId).then((course) => {
      setCourse(course);
    });
    /*
    studentService.getStudentsInCourse(courseId).then((students) => {
      setStudents(students);
      console.log(students);
    });
    */
  }, [courseId]);

  const onDelete = async () => {
    console.log("onDelete");
    if (confirm(`Delete course '${course.name}'?`) === true) {
      try {
        await courseService.remove(course);
        navigate("/");
        toast.success(t("toasts.course.delete"));
      } catch (exception) {
        toast.error(t("toasts.course.error"));
      }
    }
  };

  if (!course) return;

  return (
    <div className="m-4 w-1/2">
      <h2 className="mb-4 text-2xl font-bold">{course.name}</h2>
      <p>{course.description}</p>

      <div>
        <Link to={`/courses/${courseId}/new-assignment`}>
          <button className="m-2 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
            {t("course.new_assignment")}
          </button>
        </Link>
        <button
          onClick={onDelete}
          className="m-2 bg-red-400 hover:bg-red-500 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
        >
          {t("course.delete")}
        </button>
      </div>

      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                {t("course.assignment.name")}
              </th>
              <th scope="col" className="px-6 py-3">
                {t("course.assignment.points")}
              </th>
              <th scope="col" className="px-6 py-3">
                {t("course.assignment.description")}
              </th>
            </tr>
          </thead>
          <tbody>
            {course.assignments.map((assg) => (
              <tr
                key={assg._id}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
              >
                <td
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  <Link to={`/assignments/${assg._id}`}>{assg.name}</Link>
                </td>
                <td className="px-6 py-4">{assg.points}</td>
                <td className="px-6 py-4">{assg.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Course;
