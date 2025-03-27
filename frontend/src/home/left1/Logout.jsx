import axios from "axios";
import React, { useState } from "react";
import { TbLogout2 } from "react-icons/tb";
import Cookies from "js-cookie";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthProvider";
const Logout = () => {
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const [, setAuthUser] = useAuth();
  const handleLogout = async () => {
    try {
      const response = await axios.post("/api/user/logout");
      localStorage.removeItem("ChatApp");
      Cookies.remove("jwt");
      setAuthUser(undefined);

      if (response.data) {
        toast.success("Logout successful");
        navigate("/login");
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
        <div className="p-3">
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
