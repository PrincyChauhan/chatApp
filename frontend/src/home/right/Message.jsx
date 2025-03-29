import React from "react";

const Message = ({ message }) => {
  const authUser = JSON.parse(localStorage.getItem("ChatApp"));
  const itsMe = message.senderId === authUser.user._id;

  const chatAlignment = itsMe ? "justify-end" : "justify-start";
  const chatColor = itsMe ? "bg-gray-800 text-white" : "bg-gray-500 text-white";

  const createdAt = new Date(message.createdAt);
  const formattedTime = createdAt.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div className={`flex ${chatAlignment} mb-4`}>
      <div
        className={`max-w-[75%] rounded-lg px-3 py-3 mt-2 mr-2 ml-2 ${chatColor}`}
      >
        <p className="break-words">{message.messages}</p>
        <p className="text-xs text-white-100 mt-1">{formattedTime}</p>
      </div>
    </div>
  );
};

export default Message;
