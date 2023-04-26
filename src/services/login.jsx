import axios from "axios";

let baseUrl = "/api/login";

if (process.env.NODE_ENV === "development")
  baseUrl = "http://localhost:3000" + baseUrl;

export let headers = {};

const setToken = (token) => (headers.Authorization = `bearer ${token}`);

const login = async (credentials) => {
  const res = await axios.post(baseUrl, credentials);
  return res.data;
};

const logout = () => {
  headers = {};
};

export default { setToken, login, logout };
