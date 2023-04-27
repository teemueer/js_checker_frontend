import { useState } from "react";

const Register = ({ register }) => {
  const [username, setUsername] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (password1 === password2) {
      register({ username, password: password1 });
      setUsername("");
      setPassword1("");
      setPassword2("");
    }
  };

  return (
    <div id="content">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <table>
          <tbody>
            <tr>
              <td>Username:</td>
              <td>
                <input
                  id="username"
                  value={username}
                  onChange={({ target }) => setUsername(target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>Password:</td>
              <td>
                <input
                  id="password1"
                  type="password"
                  value={password1}
                  onChange={({ target }) => setPassword1(target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>Confirm:</td>
              <td>
                <input
                  id="password2"
                  type="password"
                  value={password2}
                  onChange={({ target }) => setPassword2(target.value)}
                />
              </td>
            </tr>
            <tr>
              <td colSpan="2">
                <input id="register-button" type="submit" value="Register" />
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
};

export default Register;
