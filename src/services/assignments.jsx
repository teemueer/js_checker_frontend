import axios from "axios";
import { headers } from "./login";

let baseUrl = "/api/assignments";

if (process.env.NODE_ENV === "development")
  baseUrl = "http://localhost:3000" + baseUrl;

const getById = (id) => {
  const req = axios.get(`${baseUrl}/${id}`, { headers });
  return req.then((res) => res.data);
};

const post = async (assignment) => {
  const res = await axios.post(baseUrl, assignment, { headers });
  return res.data;
};

const patch = (assg) => {
  axios
    .patch(`${baseUrl}/${assg._id}`, assg, { headers })
    .then((res) => console.log("Patched assignment"))
    .catch((error) => console.error(error.message));
};

const remove = (assg) => {
  axios
    .delete(`${baseUrl}/${assg._id}`, { headers })
    .then((res) => console.log("Removed assignment"))
    .catch((error) => console.error(error.message));
};

export default { getById, post, patch, remove };
