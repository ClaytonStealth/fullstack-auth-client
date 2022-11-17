import { useState } from "react";
import { useAuth } from "../Hooks/auth";
import { useNavigate } from "react-router-dom";
export const RegistrationPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [registerMessage, setRegisterMessage] = useState("");
  const auth = useAuth();
  const navigate = useNavigate();
  return (
    <div>
      <h1>Fullstack Auth Registration Page</h1>

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
        {registerMessage && <h3>{registerMessage}</h3>}
        <br />
        <button
          type='button'
          onClick={async () => {
            const registerResult = await auth.register(email, password);
            if (registerResult.success) {
              navigate("/login");
            }
            if (!registerResult.success) {
              setRegisterMessage(registerResult.message);
            }
          }}
        >
          Sign Up
        </button>
      </div>
    </div>
  );
};
