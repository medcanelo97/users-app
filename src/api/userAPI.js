import axios from "./axios";
import { getUsersEndpoint } from "../constants/endpoints";

//  Function to get users
const getUsers = async () => {
  const response = await axios.get(getUsersEndpoint, {
    params: { per_page: 5 },
  });
  const { data } = response;
  return data;
};

export const userAPI = {
  getUsers,
};
