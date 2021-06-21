import axios from "./axios";
import { getUsersEndpoint, getUserEndpoint } from "../constants/endpoints";

//  Function to get users
const getUsers = async () => {
  const response = await axios.get(getUsersEndpoint, {
    params: { per_page: 5 },
  });
  const { data } = response;
  return data;
};

//  Function to get single user
const getUser = async (username = "") => {
  const edndpointToUse = getUserEndpoint.replace("{username}", username);
  const response = await axios.get(edndpointToUse);
  const { data } = response;
  return data;
};

export const userAPI = {
  getUsers,
  getUser,
};
