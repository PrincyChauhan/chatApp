import React from "react";
import User from "./User";
import userGetAllUsers from "../../context/userGetAllUsers";

const Users = () => {
  const [allUsers] = userGetAllUsers();
  console.log(allUsers, "----------");
  return (
    <div
      className="py-2 flex-scrollbar overflow-y-auto"
      style={{ maxHeight: "calc(84vh-10vh" }}
    >
      {allUsers.map((user, index) => {
        return <User key={index} user={user} />;
      })}
    </div>
  );
};

export default Users;
