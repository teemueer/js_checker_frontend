import React from "react";

const StudentModal = (props) => {
  if (!props.show) {
    return null;
  }
  console.log(props.student.results);

  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center bg-gray-500/50">
        <div className="bg-white w-[600px] h-[500px]">
          <button onClick={props.onClose}>test</button>
          <div>
            <p>student info</p>
          </div>
          <div>
            <p>Courses</p>
            {props.student.results.map((result) => (
              <p>{result._id}</p>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default StudentModal;
