import { Link } from "react-router-dom";
import { useAuth } from "../Hooks/auth";
export const NavBar = () => {
  const auth = useAuth();
  return (
    <div className='navbar'>
      {auth.userEmail && <h3>Current user: {auth.userEmail} </h3>}
      <Link to='/'>Home</Link>
      <Link to='/login'>Login Form</Link>
      <Link to='/registration'>Registration Form</Link>
      <br />
      {auth.userEmail && (
        <button
          onClick={() => {
            auth.logout();
          }}
        >
          Logout
        </button>
      )}
    </div>
  );
};
