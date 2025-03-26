import React from "react";
import Search from "./Search";
import Users from "./Users";

const Left = () => {
  return (
    <div className="w-[30%] border-white bg-black text-white">
      <h1 className="font-bold text-3xl px-9 py-1">ChitChat</h1>
      <Search />
      <hr></hr>
      <Users />
    </div>
  );
};

export default Left;
