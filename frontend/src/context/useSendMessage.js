import { useState } from "react";
import useConversation from "../statemanage/useConversation.js";
import axios from "axios";
const useSendMessage = () => {
  const [loading, setLoading] = useState(false);
  const { messages, setMessage, selectedConversation } = useConversation();
  const sendMessages = async (message) => {
    setLoading(true);

    try {
      const res = await axios.post(
        `/api/message/send/${selectedConversation._id}`,
        { messages: message }
      );
      // setMessage([...messages, res.data.newMessage]);
      setMessage([
        ...(Array.isArray(messages) ? messages : []),
        res.data.newMessage,
      ]);
      setLoading(false);
    } catch (error) {
      console.log("Error in send messages", error);
      setLoading(false);
    }
  };

  return { loading, sendMessages };
};

export default useSendMessage;
