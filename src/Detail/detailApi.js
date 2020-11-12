import axios from "axios";

export const detailApi = async () => {
  return await axios
    .get("http://localhost:3001/detail")
    .then((response) => {
      //test
      console.log("++++ detail response", response);
      return response.data;
    })
    .catch((error) => {
      return error;
    });
};
