import React, { useEffect } from "react";
import { userAPI } from "../api";
import useAPICall from "../hooks/useAPICall";

const Home = (props) => {
  //  Component hooks
  const { response: users, error, clearData, callAPI } = useAPICall({
    queryFunction: userAPI.getUsers,
  });

  //    Component did mount
  useEffect(() => {
    clearData();
    callAPI();
  }, []);

  //    Watching success response
  useEffect(() => {
    if (!users) {
      return;
    }
    console.log("RESPONSE: ", users);
  }, [users]);

  //    Watching error
  useEffect(() => {
    if (!error) {
      return;
    }
    console.log("ERROR: ", error);
  }, [error]);

  //    Rendering
  return <h1>HOME</h1>;
};

export default Home;
