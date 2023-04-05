import { useState, useEffect } from "react";
import axios from "axios";

const useResource = (baseUrl) => {
  const [resources, setResources] = useState([]);

  useEffect(() => {
    axios
      .get(baseUrl)
      .then((res) => setResources(res.data))
      .catch((error) => console.error(error.message));
  }, []);

  const post = (assg) => {
    axios
      .post(baseUrl, assg)
      .then((res) => console.log("Posted new assignment"))
      .catch((error) => console.error(error.message));
  };

  const patch = (assg) => {
    axios
      .patch(`${baseUrl}/${assg._id}`, assg)
      .then((res) => console.log("Patched assignment"))
      .catch((error) => console.error(error.message));
  };

  const remove = (assg) => {
    axios
      .delete(`${baseUrl}/${assg._id}`)
      .then((res) => console.log("Removed assignment"))
      .catch((error) => console.error(error.message));
  };

  const service = { post, patch, remove };

  return [resources, service];
};

export default useResource;
