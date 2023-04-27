import { useState } from "react";

const NewCourse = ({ createCourse }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    createCourse({ name, description });
    setName("");
    setDescription("");
  };

  return (
    <div className="m-4 w-1/2">
      <h2 className="mb-4 text-2xl font-bold">New course</h2>
      <form onSubmit={handleSubmit}>
        <div className="">
          <div className="mt-3">
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Name
            </label>
            <input
              id="name"
              value={name}
              onChange={({ target }) => setName(target.value)}
              className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
            />
          </div>
          <div className="mt-3">
            <label
              htmlFor="description"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Description
            </label>
            <textarea
              id="description"
              value={description}
              onChange={({ target }) => setDescription(target.value)}
              rows="4"
              className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
            />
          </div>
        </div>
        <div>
          <button
            type="submit"
            className="mt-2 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
          >
            Create
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewCourse;
