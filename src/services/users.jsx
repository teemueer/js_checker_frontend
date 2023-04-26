import axios from "axios";

let baseUrl = "/api/users";

if (process.env.NODE_ENV === "development")
  baseUrl = "http://localhost:3000" + baseUrl;

const register = async (credentials) => {
  const res = await axios.post(baseUrl, credentials);
  return res.data;
};

export default { register };
