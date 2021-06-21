import React, { useEffect } from "react";
import UserList from "./UserList";
import { userAPI } from "../api";
import useAPICall from "../hooks/useAPICall";

const Home = (props) => {
  //  Component hooks
  const {
    response: users,
    error,
    clearData,
    callAPI,
  } = useAPICall({
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
  return (
    <div className="home">
      <h2 className="home-title">Top 5 Gihub Users</h2>
      <div className="home-info">Tap the username to see more information</div>
      <UserList users={users || []} />
    </div>
  );
};

export default Home;
