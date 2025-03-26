import React from "react";
import Chatuser from "./Chatuser";
import Messages from "./Messages";
const Right = () => {
  return (
    <div className="w-[70%] border-black bg-slate-950 text-white">
      <Chatuser />
      <Messages />
    </div>
  );
};

export default Right;
