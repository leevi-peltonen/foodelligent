import { createContext, useContext, useState } from "react";

const MessageContext = createContext()

export const useMessage = () => {
  return useContext(MessageContext)
}

const MessageProvider = (props) => {
  const [message, setMessage] = useState(null);

  const state = {
    message,
    setMessage,
  };

  return (
    <MessageContext.Provider value={state}>{props.children}</MessageContext.Provider>
  );
};

export default MessageProvider;
