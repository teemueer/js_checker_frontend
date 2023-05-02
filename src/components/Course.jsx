import { useState, useEffect } from "react";
import courseService from "../services/courses";
import studentService from "../services/student";
import { useMatch, Link, useNavigate } from "react-router-dom";
import StudentModal from "./studentComponents/studentModal";

const Course = () => {
  const navigate = useNavigate();

  const match = useMatch("/courses/:id");
  const courseId = match.params.id;

  const [course, setCourse] = useState(null);
  const [students, setStudents] = useState([]);
  const [search, setSearch] = useState("");
  const [modalStudent, setModalStudent] = useState();
  const [show, setShow] = useState(false);

  useEffect(() => {
    courseService.getById(courseId).then((course) => {
      setCourse(course);
    });
    studentService.getStudentsInCourse(courseId).then((students) => {
      setStudents(students);
      console.log(students);
    });
  }, [courseId]);

  const onDelete = () => {
    console.log("onDelete");
    if (confirm(`Delete course '${course.name}'?`) === true) {
      courseService.remove(course);
      navigate("/");
    }
  };

  const onSearch = (search) => {
    setSearch(search);
  };

  const searchStudents = students.filter((student) => {
    return student.username.toLowerCase().includes(search.toLowerCase());
  });

  if (!course) return;

  return (
    <>
      <div className="w-screen flex flex-row">
        <div className="m-4 w-1/2">
          <h2 className="mb-4 text-2xl font-bold">{course.name}</h2>
          <p>{course.description}</p>

          <div>
            <Link to={`/courses/${courseId}/new-assignment`}>
              <button className="m-2 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
                + New assignment
              </button>
            </Link>
            <button
              onClick={onDelete}
              className="m-2 bg-red-400 hover:bg-red-500 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
            >
              Delete course
            </button>
          </div>
          <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Assignment
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Points
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Description
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
        <div className="m-4 w-1/2">
          <h2 className="mb-4 text-2xl font-bold">Students</h2>
          <form className="max-w-sm px-4 pl-0 mb-2">
            <div className="relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-400 left-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <input
                type="text"
                placeholder="Search"
                onChange={(event) => onSearch(event.target.value)}
                value={search}
                className="w-full py-3 pl-12 pr-4 text-gray-500 border rounded-md outline-none bg-gray-50 focus:bg-white focus:border-indigo-600"
              />
            </div>
          </form>
          <div>
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Username
                  </th>
                  <th scope="col" className="px-6 py-3">
                    completed
                  </th>
                  <th scope="col" className="px-6 py-3"></th>
                </tr>
              </thead>
              <tbody>
                {searchStudents.map((student) => (
                  <tr
                    key={student._id}
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                  >
                    <td
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      <p>{student.username}</p>
                    </td>
                    <td className="px-6 py-4">
                      {student.results.length} / {course.assignments.length}
                    </td>
                    <td className="px-6 py-4">
                      <button
                        onClick={() => {
                          setShow(true), setModalStudent(student);
                        }}
                        className="text-blue-500"
                      >
                        Details
                      </button>
                    </td>
                  </tr>
                  //Send current student to StudentModal
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <StudentModal
          student={modalStudent}
          course={course}
          show={show}
          onClose={() => setShow(false)}
        />
      </div>
    </>
  );
};

export default Course;
