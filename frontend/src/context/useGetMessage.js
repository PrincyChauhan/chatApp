import { useEffect, useState } from "react";
import useConversation from "../statemanage/useConversation.js";
import axios from "axios";
const useGetMessage = () => {
  const [loading, setLoading] = useState(false);
  const { messages, setMessage, selectedConversation } = useConversation();

  useEffect(() => {
    const getMessages = async () => {
      if (!selectedConversation?._id) return;

      setLoading(true);
      try {
        const res = await axios.get(
          `/api/message/get/${selectedConversation._id}`
        );
        if (res.data) {
          setMessage(res.data);
        }
        setLoading(false);
      } catch (error) {
        console.error("Error in getting messages:", error);
        setLoading(false);
      }
    };
    getMessages();
  }, [selectedConversation, setMessage]);

  return { loading, messages };
};

export default useGetMessage;
