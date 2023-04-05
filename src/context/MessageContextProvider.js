import React, { createContext, useEffect, useState } from "react";
import Service from "../service";

export const UserContext = createContext();
function MessageContextProvider({ children }) {
  const [messages, setMessages] = useState([]);
  const [errorMsg, setErrorMsg] = useState("");

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
    <UserContext.Provider value={messages}>{children}</UserContext.Provider>
  );
}

export default MessageContextProvider;
