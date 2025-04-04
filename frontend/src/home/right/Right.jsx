// import React, { useEffect } from "react";
// import Chatuser from "./Chatuser";
// import Messages from "./Messages";
// import Type from "./Type";
// import useConversation from "../../statemanage/useConversation.js";
// import { CiMenuFries } from "react-icons/ci";
// import { useAuth } from "../../context/AuthProvider.jsx";

// const Right = () => {
//   const { selectedConversation, setSelectedConversation } = useConversation();
//   useEffect(() => {
//     return setSelectedConversation(null);
//   }, [setSelectedConversation]);
//   return (
//     <div className="w-full bg-slate-900 text-gray-300">
//       <div>
//         {!selectedConversation ? (
//           <NoChatSelected />
//         ) : (
//           <>
//             <Chatuser />
//             <div
//               className=" flex-1 overflow-y-auto"
//               style={{ maxHeight: "calc(88vh - 8vh)" }}
//             >
//               <Messages />
//             </div>
//             <Type />
//           </>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Right;

// const NoChatSelected = () => {
//   const [authUser] = useAuth();
//   console.log(authUser);
//   return (
//     <>
//       <div className="relative">
//         <label
//           htmlFor="my-drawer-2"
//           className="btn btn-ghost drawer-button lg:hidden absolute left-5"
//         >
//           <CiMenuFries className="text-white text-xl" />
//         </label>
//         <div className="flex h-screen items-center justify-center">
//           <h1 className="text-center">
//             Welcome{" "}
//             <span className="font-semibold text-xl">{authUser.user.name}</span>
//             <br />
//             No chat selected, Please start conversation by selecting anyone to
//             your contacts.
//           </h1>
//         </div>
//       </div>
//     </>
//   );
// };

import React, { useEffect } from "react";
import Chatuser from "./Chatuser";
import Messages from "./Messages";
import Type from "./Type";
import useConversation from "../../statemanage/useConversation.js";
import { CiMenuFries } from "react-icons/ci";
import { useAuth } from "../../context/AuthProvider.jsx";

const Right = () => {
  const { selectedConversation, setSelectedConversation } = useConversation();

  // Load previous conversation from localStorage
  useEffect(() => {
    const savedConversation = localStorage.getItem("selectedConversation");
    console.log(
      savedConversation,
      "----------savedConversation-----------------"
    );
    if (savedConversation) {
      setSelectedConversation(JSON.parse(savedConversation));
    }
  }, [setSelectedConversation]);

  // Save conversation to localStorage when it changes
  useEffect(() => {
    if (selectedConversation) {
      console.log(
        selectedConversation,
        "------ selectedConversation in Right.jsx"
      );

      localStorage.setItem(
        "selectedConversation",
        JSON.stringify(selectedConversation)
      );
    }
  }, [selectedConversation]);

  return (
    <div className="w-full bg-slate-900 text-gray-300">
      <div>
        {!selectedConversation ? (
          <NoChatSelected />
        ) : (
          <>
            <Chatuser />
            <div
              className="flex-1 overflow-y-auto"
              style={{ maxHeight: "calc(88vh - 8vh)" }}
            >
              <Messages />
            </div>
            <Type />
          </>
        )}
      </div>
    </div>
  );
};

export default Right;

const NoChatSelected = () => {
  const [authUser] = useAuth();
  console.log(authUser);
  return (
    <>
      <div className="relative">
        <label
          htmlFor="my-drawer-2"
          className="btn btn-ghost drawer-button lg:hidden absolute left-5"
        >
          <CiMenuFries className="text-white text-xl" />
        </label>
        <div className="flex h-screen items-center justify-center">
          <h1 className="text-center">
            Welcome{" "}
            <span className="font-semibold text-xl">{authUser.user.name}</span>
            <br />
            No chat selected, Please start conversation by selecting anyone to
            your contacts.
          </h1>
        </div>
      </div>
    </>
  );
};
