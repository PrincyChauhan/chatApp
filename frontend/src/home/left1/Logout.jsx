import axios from "axios";
import React, { useState } from "react";
import { TbLogout2 } from "react-icons/tb";
import Cookies from "js-cookie";
import { ToastContainer, toast } from "react-toastify";

const Logout = () => {
  const [loading, setLoading] = useState(false);
  const handleLogout = async () => {
    try {
      const response = await axios.post("/api/user/logout");
      localStorage.removeItem("ChatApp");
      Cookies.remove("jwt");
      if (response.data) {
        toast.success("Logout successful");
        window.location.reload();
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
      toast.error("Logout failed. Please try again.");
    }
  };

  return (
    <>
      <ToastContainer />
      <div className="w-[4%] bg-slate-950 text-white flex flex-col justify-end">
        <div className="p-3 align-bottom">
          <button onClick={handleLogout} disabled={loading}>
            <TbLogout2 className="text-5xl p-2 hover:bg-gray-600 rounded-lg duration-300" />
            {loading && <p>Logging out...</p>}
          </button>
        </div>
      </div>
    </>
  );
};

export default Logout;
