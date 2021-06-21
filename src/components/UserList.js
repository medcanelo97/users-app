import React from "react";

const UserList = (props) => {
  //  Parsing props
  const { users } = props;

  //  Function to render users
  const renderUsers = () => {
    if (!users) {
      return null;
    }
    return users.map((user) => {
      const { login } = user;
      return <div className="user-item">{login}</div>;
    });
  };

  //  Rendering
  return (
  <div className="user-list">
      {renderUsers()}
    </div>
  );
};

export default UserList;
