import { useState } from "react";
import { useMatch, useNavigate } from "react-router-dom";
import courseService from "../services/courses";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";

const NewAssignment = () => {
  const navigate = useNavigate();
  const [t, i18n] = useTranslation("common");

  const match = useMatch("/courses/:id/new-assignment");
  const courseId = match.params.id;

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const newAssignment = await courseService.postAssignment(courseId, {
        name,
        description,
      });
      setName("");
      setDescription("");
      navigate(`/assignments/${newAssignment._id}`);
      toast.success("New assignment created");
    } catch (exception) {
      toast.error("Assignment creation failed");
      console.error(exception);
    }
  };

  return (
    <div className="m-4 w-1/2">
      <h2 className="mb-4 text-2xl font-bold">{t("new_assignment.title")}</h2>
      <form onSubmit={handleSubmit}>
        <div className="">
          <div className="mt-3">
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              {t("new_assignment.name")}
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
              {t("new_assignment.description")}
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
            {t("new_assignment.create")}
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewAssignment;
