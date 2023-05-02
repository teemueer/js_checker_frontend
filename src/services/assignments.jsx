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

const patch = async (assg) => {
  const res = await axios.patch(`${baseUrl}/${assg._id}`, assg, { headers });
  return res.data;
};

const remove = async (assg) => {
  axios.delete(`${baseUrl}/${assg._id}`, { headers });
};

const test = async (id, url) => {
  console.log(id, url);
  //const response = await axios.post(`${baseUrl}/${id}`, url);
  //console.log(response.data);
  return res.message("allok");
};

export default { getById, post, patch, remove, test };
