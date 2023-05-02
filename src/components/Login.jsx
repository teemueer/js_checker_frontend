import { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Login = ({ login }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { t, i18n } = useTranslation("common");

  const handleSubmit = (event) => {
    event.preventDefault();
    login({ username, password });
    setUsername("");
    setPassword("");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="px-8 py-6 mt-4 text-left bg-white shadow-lg">
        <h2 className="text-2xl font-bold text-center">{t("login.title")}</h2>
        <form onSubmit={handleSubmit}>
          <div className="mt-4">
            <div>
              <label htmlFor="username" className="block">
                {t("login.username")}
              </label>
              <input
                id="username"
                value={username}
                onChange={({ target }) => setUsername(target.value)}
                autoComplete="off"
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
              />
            </div>
            <div className="mt-4">
              <label htmlFor="username" className="block">
                {t("login.password")}
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={({ target }) => setPassword(target.value)}
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
              />
            </div>
            <div className="flex items-baseline justify-between">
              <button className="px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900">
                {t("login.login")}
              </button>
              <Link
                to="/register"
                className="text-sm text-blue-600 hover:underline"
              >
                {t("login.create_new")}
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
