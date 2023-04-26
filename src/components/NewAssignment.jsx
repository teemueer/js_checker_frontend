import { useState } from "react";
import { useMatch } from "react-router-dom";

const NewAssignment = ({ createAssignment }) => {
  const match = useMatch("/courses/:id/new-assignment");
  const courseId = match.params.id;

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [points, setPoints] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();
    createAssignment(courseId, { name, description, points });
    setName("");
    setDescription("");
  };

  return (
    <div id="content">
      <h2>New assignment</h2>
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
              <td>Points:</td>
              <td>
                <input
                  type="number"
                  value={points}
                  onChange={({ target }) => setPoints(target.value)}
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

export default NewAssignment;
