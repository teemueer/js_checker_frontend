import axios from "axios";
import { headers } from "./login";

let baseUrl = "/api/courses";

if (process.env.NODE_ENV === "development")
  baseUrl = "http://localhost:3000" + baseUrl;

const get = () => {
  const req = axios.get(baseUrl, { headers });
  return req.then((res) => res.data);
};

const getById = (id) => {
  const req = axios.get(`${baseUrl}/${id}`, { headers });
  return req.then((res) => res.data);
};

const postCourse = async (course) => {
  const res = await axios.post(baseUrl, course, { headers });
  return res.data;
};

const postAssignment = async (courseId, assignment) => {
  const res = await axios.post(`${baseUrl}/${courseId}`, assignment, {
    headers,
  });
  return res.data;
};

const remove = async (course) => {
  await axios.delete(`${baseUrl}/${course._id}`, { headers });
};

export default { get, getById, postCourse, postAssignment, remove };
