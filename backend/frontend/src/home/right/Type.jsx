import React, { useState } from "react";
import { IoSend } from "react-icons/io5";
import { RiAttachment2 } from "react-icons/ri";
import useSendMessage from "../../context/useSendMessage.js";

const Type = () => {
  const { sendMessages } = useSendMessage();
  const [message, setMessage] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    await sendMessages(message);
    setMessage("");
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="flex space-x-3 h-[8vh] text-center">
          <div className="w-[95%] mx-4 relative">
            <div className="flex items-center justify-center">
              <input
                type="file"
                id="fileInput"
                className="hidden"
                accept="image/*, application/pdf"
              />
              <label htmlFor="fileInput">
                <RiAttachment2
                  className="absolute right-12 top-4 cursor-pointer"
                  size={20}
                />
              </label>
              <input
                type="text"
                placeholder="Type Here"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="border-[1px] border-gray-700 rounded-xl flex item-center w-full py-3 px-3 grow outline-none bg-slate-900"
              />
            </div>
          </div>

          <button className="button button-primary">
            <IoSend size={20} />
          </button>
        </div>
      </form>
    </>
  );
};

export default Type;
