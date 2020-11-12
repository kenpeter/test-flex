import axios from "axios";

export const agreeApi = async (payload) => {
  return await axios
    .post("http://localhost:3001/agree", payload)
    .then((response) => {
      //test
      console.log("++++ agree api, response", response);
      return response.data;
    })
    .catch((error) => {
      return error;
    });
};
