import React, { createContext, useEffect, useState } from "react";
import Service from "../service";

export const MessageContext = createContext();
function MessageContextProvider({ children }) {
  const [messages, setMessages] = useState([]);
  const [errorMsg, setErrorMsg] = useState("");
  const [id, setId] = useState("1");
  const setUserId = (id) => {
    setId(id);
  };
  const resp = async () => {
    try {
      const data = await Service(
        "GET",
        "https://reactbasic.onrender.com/message/getmessages",
        null
      );
      setMessages(data.data.data);
    } catch (err) {
      setErrorMsg(err.message);
    }
  };
  useEffect(() => {
    resp();
  }, []);
  return (
    <MessageContext.Provider value={{ messages, id, setUserId, errorMsg }}>
      {children}
    </MessageContext.Provider>
  );
}

export default MessageContextProvider;
