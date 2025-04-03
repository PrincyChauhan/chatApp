import { useEffect, useState } from "react";
import useConversation from "../statemanage/useConversation.js";
import axios from "axios";

const useGetMessage = () => {
  const [loading, setLoading] = useState(false);
  const { messages, setMessage, selectedConversation } = useConversation();

  useEffect(() => {
    if (!selectedConversation?._id) {
      console.log("No conversation selected, skipping API call.");
      setMessage([]);
      return;
    }
    const getMessages = async () => {
      setMessage([]);
      setLoading(true);
      console.log(
        `Fetching messages for conversation ID: ${selectedConversation._id}`
      );

      try {
        const res = await axios.get(
          `/api/message/get/${selectedConversation._id}`
        );
        console.log(
          "Response from getMessages----- res------------:",
          res.data
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
