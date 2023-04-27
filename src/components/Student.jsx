import { useEffect, useState } from "react";
import studentService from "../services/student";
import assignmentService from "../services/assignments";
import { useMatch } from "react-router-dom";

const Student = () => {
  const [url, setURL] = useState("https://users.metropolia.fi/");
  const [assg, setAssg] = useState();
  const [res, setRes] = useState(null);
  const [loading, setLoading] = useState(false);

  const match = useMatch("/student/:id");
  const assignmentId = match.params.id;

  const onLoading = () => {
    setRes(null);
    setLoading(!loading);
  };

  useEffect(() => {
    studentService
      .getById(assignmentId)
      .then((assignment) => setAssg(assignment));
  }, []);

  const onUrlChange = (url) => {
    setURL(url);
  };

  const onEvaluate = async () => {
    if (!url) {
      alert("No URL set.");
    } else {
    }
  };

  return (
    <>
      {assg && (
        <>
          <div className="flex items-center justify-center h-screen w-screen bg-gray-100">
            <div className="px-8 py-6 mt-4 bg-white shadow-lg w-3/5 h-1/2 max-w-2xl flex flex-col items-center rounded">
              <h1 className="font-bold text-center text-2xl">
                HTML & JS Checker
              </h1>
              <div className="my-2 mb-5  h-0.5 w-4/5 border-2 "></div>
              <div className="flex flex-col w-4/5 px-2 py-2 mb-5 items-center">
                <h2>{assg.course.name}</h2>
                <p>Assignment: {assg.name}</p>
                <p>pisteet {assg.points}</p>
                <p>{assg.description}</p>
              </div>
              <div className=" flex flex-col w-3/5 items-center">
                <p className="mb-1 px-1">
                  Url to your assignment @ users.metropolia.fi
                </p>
                <input
                  type="text"
                  className=" w-full bg-grray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="https://users.metropolia.fi"
                />
                <button>check</button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Student;
