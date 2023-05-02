import { useState, useEffect } from "react";
import { Routes, Route, Navigate, Outlet, useNavigate } from "react-router-dom";
import loginService from "./services/login";
import usersService from "./services/users";

import assignmentService from "./services/assignments";
import Navigation from "./components/Navigation";
import Courses from "./components/Courses";
import NewCourse from "./components/NewCourse";
import NewAssignment from "./components/NewAssignment";
import Course from "./components/Course";
import Assignment from "./components/Assignment";
import Login from "./components/Login";
import Register from "./components/Register";
import "./App.css";
import Student from "./components/Student";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    const loggedInUser = window.localStorage.getItem("loggedInUser");
    if (loggedInUser) {
      const user = JSON.parse(loggedInUser);
      setUser(user);
      loginService.setToken(user.token);
    }
    setLoading(false);
  }, []);

  const login = async (credentials) => {
    try {
      const user = await loginService.login(credentials);
      window.localStorage.setItem("loggedInUser", JSON.stringify(user));
      setUser(user);
      loginService.setToken(user.token);
    } catch (exception) {
      toast.error("Login failed");
      console.error(exception);
    }
  };

  const logout = () => {
    loginService.logout();
    setUser(null);
    window.localStorage.removeItem("loggedInUser");
    toast("Logged out");
  };

  const register = async (credentials) => {
    try {
      await usersService.register(credentials);
      navigate("/login");
    } catch (exception) {
      toast.error("Registration failed");
      console.error(exception);
    }
  };

  const PrivateRoute = () => {
    return user ? <Outlet user={user} /> : <Navigate to="/login" />;
  };

  const PublicRoute = () => {
    return !user ? <Outlet /> : <Navigate to="/" />;
  };

  if (loading) return;

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover={false}
      />

      {user && <Navigation user={user} logout={logout} />}
      <Routes>
        <Route path="/" element={<PrivateRoute />}>
          <Route path="" element={<Courses />} />
          <Route path="new-course" element={<NewCourse />} />
          <Route path="courses/:id" element={<Course />} />
          <Route
            path="courses/:id/new-assignment"
            element={<NewAssignment />}
          />
          <Route path="assignments/:id" element={<Assignment />} />
        </Route>
        <Route path="/" element={<PublicRoute />}>
          <Route path="login" element={<Login login={login} />} />
          <Route path="register" element={<Register register={register} />} />
          <Route path="/student/:id" element={<Student />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
