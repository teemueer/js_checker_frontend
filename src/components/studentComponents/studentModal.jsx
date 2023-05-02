import React from "react";

const StudentModal = (props) => {
  if (!props.show) {
    return null;
  }
  console.log(props.student.results);
  console.log(props.course.assignments);

  const countSum = (obj) => {
    const sum = obj.reduce((acc, obj) => {
      return acc + obj.points;
    }, 0);
    return sum;
  };

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
              <h1 className="font-bold text-xl">Student details</h1>
              <button className="pr-2" onClick={props.onClose}>
                x
              </button>
            </div>
            <h2> Username: {props.student.username}</h2>
            <p>
              Completed: {props.student.results.length} /
              {props.course.assignments.length}{" "}
            </p>
            <p>
              Total points: {countSum(props.student.results)} /{" "}
              {countSum(props.course.assignments)}
            </p>
          </div>
          <div className="overflow-y-scroll w-full">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Assignment
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Attempts
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Result
                  </th>
                </tr>
              </thead>
              <tbody className="overflow-y-scroll">
                {props.student.results.map((result) => (
                  <tr key={result._id}>
                    <td
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {result.name ? result.name : result._id}
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
