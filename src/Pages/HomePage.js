import { useState, useEffect } from "react";
import { useAuth } from "../Hooks/auth";
const urlEndpoint = process.env.REACT_APP_URL_ENDPOINT;
export const HomePage = () => {
  const [message, setMessage] = useState("");
  const auth = useAuth();
  useEffect(() => {
    const fetchMessage = async () => {
      const response = await fetch(`${urlEndpoint}/users/message`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          [process.env.REACT_APP_Token]: auth.userToken,
        },
      });
      setMessage(await response.message);
    };
    if (auth.userToken) {
      fetchMessage();
    }
    if (!auth.userToken) {
      setMessage("");
    }
  }, [auth.userToken]);
  return (
    <div>
      <h1>Fullstack Auth Home Page</h1>
      {message && <h3>{message}</h3>}
    </div>
  );
};
