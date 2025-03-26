import React from "react";

import { IoSend } from "react-icons/io5";

const Type = () => {
  return (
    <>
      <div className="flex space-x-3 h-[8vh] text-center">
        <div className="w-[95%] mx-4">
          <input
            type="text"
            placeholder="Type Here"
            className="border-[1px] border-gray-700 rounded-xl flex item-center w-full py-3 px-4 grow outline-none bg-slate-900"
          />
        </div>
        <button className="button button-primary">
          <IoSend />
        </button>
      </div>
    </>
  );
};

export default Type;
