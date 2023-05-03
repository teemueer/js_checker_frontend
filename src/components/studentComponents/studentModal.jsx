import React from "react";
import { useTranslation } from "react-i18next";

const StudentModal = (props) => {
  const [t, i18n] = useTranslation("common");

  if (!props.show) {
    return null;
  }

  const countSum = (obj) => {
    const sum = obj.reduce((acc, obj) => {
      return acc + obj.points;
    }, 0);
    return sum;
  };

  //Temporary fix. Try to implement backend solution if ther is time
  let temp = [];
  for (let i = 0; i < props.course.assignments.length; i++) {
    for (let j = 0; j < props.student.results.length; j++) {
      if (
        props.course.assignments[i]._id === props.student.results[j].assignment
      ) {
        temp.push({
          name: props.course.assignments[i].name,
          attempts: props.student.results[j].attempts,
          passed: props.student.results[j].passed,
          points: props.student.results[j].points,
        });
      }
    }
  }
  console.log(temp);

  if (!props.student) return;

  return (
    <>
      <div
        className="fixed inset-0 flex items-center justify-center bg-gray-500/50"
        onClick={props.onClose}
      >
        <div
          className="bg-white w-[700px] max-h-[700px] min-h-[200px] flex items-center flex-col p-6 rounded-md drop-shadow"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="w-full h-1/4 mb-5">
            <div className="flex flex-row w-full justify-between mb-1">
              <h1 className="font-bold text-xl">
                {t("student_modal.student_details")}
              </h1>
              <button
                type="button"
                onClick={props.onClose}
                className="text-white font-extrabold bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded text-sm px-4 py-2 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                {t("student_modal.close")}
              </button>
            </div>
            <h2>
              {" "}
              {t("student_modal.student_username")} {props.student.username}
            </h2>
            <p>
              {t("student_modal.student_completed")} {temp.length} /
              {props.course.assignments.length}{" "}
            </p>
            <p>
              {t("student_modal.student_points")} {countSum(temp)} /{" "}
              {countSum(props.course.assignments)}
            </p>
          </div>
          <div className="overflow-y-scroll w-full">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    {t("student_modal.assignment")}
                  </th>
                  <th scope="col" className="px-6 py-3">
                    {t("student_modal.attempts")}
                  </th>
                  <th scope="col" className="px-6 py-3">
                    {t("student_modal.result")}
                  </th>
                </tr>
              </thead>
              <tbody className="overflow-y-scroll">
                {temp.map((result) => (
                  <tr key={result._id}>
                    <td
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {result.name}
                    </td>
                    <td className="px-6 py-4">{result.attempts}</td>
                    <td className="px-6 py-4">
                      {result.passed ? (
                        <p className="text-green-500">PASS</p>
                      ) : (
                        <p className="text-red-500">FAIL</p>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default StudentModal;
