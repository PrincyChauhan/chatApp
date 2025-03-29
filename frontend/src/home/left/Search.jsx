import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";
import userGetAllUsers from "../../context/userGetAllUsers.jsx";
import useConversation from "../../statemanage/useConversation.js";
const Search = () => {
  const [search, setSearch] = useState("");
  const [allUsers] = userGetAllUsers();
  const { setSelectedConversation } = useConversation();
  return (
    <div className=" h-[10vh]">
      <div className="px-6 py-4">
        <form>
          <div className="flex space-x-3">
            <label className=" border-[1px] border-gray-700 bg-slate-900 rounded-lg p-3 flex items-center gap-2 w-[80%]">
              <input
                type="text"
                className="grow outline-none bg-transparent"
                placeholder="Search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </label>
            <button>
              <IoSearch className="text-5xl p-2 hover:bg-gray-600 rounded-full duration-300" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Search;
