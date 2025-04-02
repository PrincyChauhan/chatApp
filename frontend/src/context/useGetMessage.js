import { useEffect, useState } from "react";
import useConversation from "../statemanage/useConversation.js";
import axios from "axios";

const useGetMessage = () => {
  const [loading, setLoading] = useState(false);
  const { messages, setMessage, selectedConversation } = useConversation();

  useEffect(() => {
    const getMessages = async () => {
      if (!selectedConversation?._id) {
        console.log("No conversation selected, skipping API call.");
        return;
      }

      setLoading(true);
      console.log(
        `Fetching messages for conversation ID: ${selectedConversation._id}`
      );

      try {
        const res = await axios.get(
          `/api/message/get/${selectedConversation._id}`
        );
        if (res.data?.messages) {
          setMessage(res.data.messages);
        } else {
          console.warn("No messages found in response.");
          setMessage([]);
        }
      } catch (error) {
        console.error("Error in getting messages:", error);
        setLoading(false);
      } finally {
        setLoading(false);
      }
    };
    getMessages();
  }, [selectedConversation, setMessage]);

  return { loading, messages };
};

export default useGetMessage;
