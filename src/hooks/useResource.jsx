import { useState, useEffect } from "react";
import axios from "axios";

const useResource = (baseUrl) => {
  const [resources, setResources] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/test`)
      .then((res) => setResources(res.data))
      .catch((error) => console.error(error.message));
  }, []);

  const post = (test) => {
    axios
      .post(`http://localhost:3000/api/test`, test)
      .then((res) => console.log("Posted new test"))
      .catch((error) => console.error(error.message));
  };

  const service = { post };

  return [resources, service];
};

export default useResource;
