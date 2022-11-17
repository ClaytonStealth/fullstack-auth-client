import { useAuth } from "../Hooks/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
export const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginMessage, setLoginMessage] = useState("");
  const auth = useAuth();
  const navigate = useNavigate();
  return (
    <div>
      <h1>Fullstack Auth Login Page</h1>

      <div>
        <label htmlFor='email'>Email</label>
        <input
          type='email'
          name='email'
          id='email'
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <br />
        <label htmlFor='password'>Password</label>
        <input
          type='password'
          name='password'
          id='password'
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <br />
        {loginMessage && <h3>{loginMessage}</h3>}
        <br />
        <button
          type='button'
          onClick={async () => {
            const loginResult = await auth.login(email, password);
            if (loginResult.success) {
              navigate("/");
            }
            if (!loginResult.success) {
              setLoginMessage(loginResult.message);
            }
          }}
        >
          Log In
        </button>
      </div>
    </div>
  );
};
