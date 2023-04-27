import { useState } from "react";
import { Link } from "react-router-dom";

const Login = ({ login }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    login({ username, password });
    setUsername("");
    setPassword("");
  };

  return (
    <div id="content">
      <h2>Login</h2>
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
                  id="password"
                  type="password"
                  value={password}
                  onChange={({ target }) => setPassword(target.value)}
                />
              </td>
            </tr>
            <tr>
              <td colSpan="2">
                <input id="login-button" type="submit" value="Login" />
              </td>
            </tr>
          </tbody>
        </table>
      </form>
      <Link to="/register">Create new account</Link>
    </div>
  );
};

export default Login;
