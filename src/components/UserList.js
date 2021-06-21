import React from "react";
import { useHistory } from "react-router-dom";
const UserList = (props) => {
  //  Parsing props
  const { users } = props;

  const history = useHistory();

  const onUserClicked = (username) => {
    history.push({ pathname: "/user", state: { username } });
  };

  //  Function to render users
  const renderUsers = () => {
    if (!users) {
      return null;
    }
    return users.map((user, index) => {
      const { login } = user;
      return (
        <div
          className="user-item"
          key={index}
          onClick={() => onUserClicked(login)}
        >
          {login}
        </div>
      );
    });
  };

  //  Rendering
  return <div className="user-list">{renderUsers()}</div>;
};

export default UserList;
