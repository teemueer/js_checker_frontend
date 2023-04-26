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
    <div id="content">
      <h2>New course</h2>
      <form onSubmit={handleSubmit}>
        <table>
          <tbody>
            <tr>
              <td>Name:</td>
              <td>
                <input
                  value={name}
                  onChange={({ target }) => setName(target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>Description:</td>
              <td>
                <textarea
                  value={description}
                  onChange={({ target }) => setDescription(target.value)}
                />
              </td>
            </tr>
            <tr>
              <td colSpan="2">
                <input type="submit" value="Create" />
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
};

export default NewCourse;
