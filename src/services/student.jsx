//To check if the URL provided by the student is valid.
import axios from "axios";
let baseUrl = "/api/student";
let assignmentURL = "/api/assignments";

if (process.env.NODE_ENV === "development") {
  baseUrl = "http://localhost:3000" + baseUrl;
  assignmentURL = "http://localhost:3000" + assignmentURL;
}

const getById = async (id) => {
  const res = await axios.get(`${baseUrl}/assignment/${id}`);
  return res.data;
};

const evaluateAssg = async (id, url) => {
  const res = await axios.post(`${assignmentURL}/${id}`, { url: url });
  return res.data;
};

const getStudents = async () => {
  const res = await axios.get(`${baseUrl}/`);
  return res.data;
};

const getStudentsInCourse = async (id) => {
  const res = await axios.post(`${baseUrl}/test`, { id: id });
  return res.data;
};

const isValidUrl = (urlString) => {
  var urlPattern = new RegExp(
    "^(https?:\\/\\/)?" + // validate protocol
      "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // validate domain name
      "((\\d{1,3}\\.){3}\\d{1,3}))" + // validate OR ip (v4) address
      "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // validate port and path
      "(\\?[;&a-z\\d%_.~+=-]*)?" + // validate query string
      "(\\#[-a-z\\d_]*)?$",
    "i"
  ); // validate fragment locator~
  return !!urlPattern.test(urlString);
};

export default {
  isValidUrl,
  getById,
  evaluateAssg,
  getStudents,
  getStudentsInCourse,
};
