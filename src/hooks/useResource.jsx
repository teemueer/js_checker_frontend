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

  const update = (test) =>{
    axios
        .post(`http://localhost:3000/api/test/update`, test)
        .then((res) => console.log("Updated test"))
        .catch((error) => console.error(error.message));
  };

  const deleteTest = (id) => {
    console.log(id);
      axios
      .delete(`http://localhost:3000/api/test/`, id)
      .then((res) => console.log("Deleted test"))
      .catch((error) => console.error(error.message));
  };
 
  const service = { post, update, deleteTest };

  return [resources, service];
};

export default useResource;
