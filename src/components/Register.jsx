import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";
import usersService from "../services/users";

const Register = () => {
  const navigate = useNavigate();
  const [t, i18n] = useTranslation("common");

  const [username, setUsername] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password1 === password2) {
      try {
        await usersService.register({ username, password: password1 });
        navigate("/login");
        toast.success(t("toasts.register.success"));
        setUsername("");
        setPassword1("");
        setPassword2("");
      } catch (exception) {
        console.error(exception);
        toast.error(t("toasts.register.error"));
      }
    } else {
      toast.error(t("toasts.register.password"));
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="px-8 py-6 mt-4 text-left bg-white shadow-lg">
        <h2 className="text-2xl font-bold text-center">
          {t("register.title")}
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mt-4">
            <div>
              <label htmlFor="username" className="block">
                {t("register.username")}
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
                {t("register.password1")}
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
                {t("register.password2")}
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
                className="m-3 w-full text-white bg-green-600 hover:bg-green-400 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                {t("register.register")}
              </button>
            </div>
            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
              {t("register.already_account")}
              <span className="ml-1">
                <Link
                  to="/login"
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  {t("register.login")}
                </Link>
              </span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
