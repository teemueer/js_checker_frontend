import { useState } from "react";
import { Link } from "react-router-dom";

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
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="px-8 py-6 mt-4 text-left bg-white shadow-lg">
        <h2 className="text-2xl font-bold text-center">Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="mt-4">
            <div>
              <label htmlFor="username" className="block">
                Username
              </label>
              <input
                id="username"
                value={username}
                onChange={({ target }) => setUsername(target.value)}
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
              />
            </div>
            <div className="mt-4">
              <label htmlFor="password1" className="block">
                Password
              </label>
              <input
                id="password1"
                type="password"
                value={password1}
                onChange={({ target }) => setPassword1(target.value)}
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
              />
            </div>
            <div className="mt-4">
              <label htmlFor="password2" className="block">
                Confirm password
              </label>
              <input
                id="password2"
                type="password"
                value={password2}
                onChange={({ target }) => setPassword2(target.value)}
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
              />
            </div>
            <div className="flex items-baseline justify-between">
              <button
                type="submit"
                className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Register
              </button>
            </div>
            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
              Already have an account?{" "}
              <Link
                to="/login"
                className="font-medium text-primary-600 hover:underline dark:text-primary-500"
              >
                Login here
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
