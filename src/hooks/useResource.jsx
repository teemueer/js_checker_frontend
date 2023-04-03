import { useState, useEffect } from "react";
import axios from "axios";

const useResource = (baseUrl) => {
  const [resources, setResources] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/assignment`)
      .then((res) => setResources(res.data))
      .catch((error) => console.error(error.message));
  }, []);

  const post = (assg) => {
    axios
      .post(`http://localhost:3000/api/assignment`, assg)
      .then((res) => console.log("Posted new assignment"))
      .catch((error) => console.error(error.message));
  };

  const patch = (assg) => {
    axios
      .patch(`http://localhost:3000/api/assignment/${assg._id}`, assg)
      .then((res) => console.log("Patched assignment"))
      .catch((error) => console.error(error.message));
  };

  const remove = (assg) => {
    axios
      .delete(`http://localhost:3000/api/assignment/${assg._id}`)
      .then((res) => console.log("Removed assignment"))
      .catch((error) => console.error(error.message));
  };

  const service = { post, patch, remove };

  return [resources, service];
};

export default useResource;
