import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import useAPICall from "./../hooks/useAPICall";
import { userAPI } from "../api/index";

const UserDetail = (props) => {
  const { state } = useLocation();
  const { response, error, callAPI, clearData } = useAPICall({
    queryFunction: userAPI.getUser,
  });

  //    Component did mount
  useEffect(() => {
    clearData();
    callAPI(state?.username);
  }, []);

  //    Watching success response
  useEffect(() => {
    if (!response) {
      return;
    }
    console.log("RESPONSE: ", response);
  }, [response]);

  //    Watching error
  useEffect(() => {
    if (!error) {
      return;
    }
    console.log("ERROR: ", error);
  }, [error]);

  if (!response) {
    return null;
  }

  return (
    <div className="user-detail">
      <img className="user-avatar" src={response.avatar_url} />
      <div className="user-info">
        <h3 className="user-name">{response.login}</h3>
        <div className="user-location">{response.location}</div>
      </div>
    </div>
  );
};

export default UserDetail;
