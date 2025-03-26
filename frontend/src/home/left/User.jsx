import React from "react";

const User = () => {
  return (
    <div>
      <div className="flex space-x-4 px-8 py-7 hover:bg-slate-600 duration-300 cursor-pointer">
        <div className="avatar avatar-online">
          <div className="w-18 rounded-full">
            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
          </div>
        </div>
        <div>
          <h1 className="font-bold">Princy Chauhan</h1>
          <sapn>pc@gmail.com</sapn>
        </div>
      </div>
    </div>
  );
};

export default User;
