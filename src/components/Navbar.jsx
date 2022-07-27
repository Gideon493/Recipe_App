import { useState } from "react";
import { NavLink } from "react-router-dom";
import SignIn from "./SignIn";
import SignUp from "./SignUp";


const Navbar = () => {
  const [signIn, setSignIn] = useState(false);
  const [signUp, setSignUp] = useState(false);
  
  //const [removeSignIn, setRemoveSignIn] = useState(true);
  //const [removeSignUp, setRemoveSignUp] = useState(true);
  const handleSignIn = () => {
    setSignIn(true);
  };
  const handleSignUp = () => {
    setSignUp(true);
  };

  const handleRemoveSignIn = () => {
    setSignIn(false);
  };
  const handleRemoveSignUp = () => {
    setSignUp(false);
  };
  return (
    <div className="navigation">
      <NavLink to="/" className="btn btn-secondary bg-transparent m-2">
        Home
      </NavLink>
      <NavLink to="/recipes" className="btn btn-secondary  bg-transparent m-2">
        Recipes
      </NavLink>
      
      <div className="sign">
        <button
          className="btn  btn-secondary bg-transparent m-2"
          onClick={handleSignIn}
        >
          Sign In
        </button>

        <button
          className="btn  btn-secondary bg-transparent m-2"
          onClick={handleSignUp}
        >
          Sign Up
        </button>
      </div>

      <div>
        <div>
          {signIn && <SignIn handleRemoveSignIn={handleRemoveSignIn} />}
          {signUp && <SignUp handleRemoveSignUp={handleRemoveSignUp} />}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
