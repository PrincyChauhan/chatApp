import React from "react";

const Message = () => {
  return (
    <>
      <div className="p-4">
        <div className="chat chat-end">
          <div className="chat-bubble chat-bubble-info">Calm down, Anakin.</div>
        </div>
        <div className="chat chat-start">
          <div className="chat-bubble chat-bubble-accent">It's insulting!</div>
        </div>
      </div>
    </>
  );
};

export default Message;
