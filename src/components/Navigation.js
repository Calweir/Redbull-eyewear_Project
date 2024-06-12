import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";
import { logout } from "./authSlice";
import { useSelector, useDispatch } from "react-redux";

//Passed props to Navigation file to handle setting username within the header once the user either registers or logins.
const Navigation = ({ handleRegister, handleLogin }) => {
  //Used dispatch to allow for changes to be made within the login/sign up links through the actions.
  const dispatch = useDispatch();
  //Selector allows me to retrieve properties that i can use within the navigation component for the username displaying in the header links.
  const user = useSelector((state) => state.auth.user);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <div className="header">
      <div className="logo">
        <img
          src="https://cdn.ecommercedns.uk/files/1/236181/8/39234588/rbspect-logo-4c-quer-black.jpg"
          width={365}
          alt="Red Bull logo"
        />
      </div>
      {/*Used Link method to allow for easy transition to different components within the website. */}
      <ul className="navMenu">
        <li>
          <Link className="links" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="links" to="/products">
            Products
          </Link>
        </li>
        <li>
          <Link className="links" to="/shoppingCart">
            Shopping Cart
          </Link>
        </li>
        {/*Created a condition that renders either username of the end user from either sign up modal or login modal. If the condition is meet the links for sign up and login or taken away and the message welcome, "username" is displayed.*/}
        {isAuthenticated ? (
          <>
            <li>Welcome, {user.username}</li>
            <li>
              <button className="userArea" onClick={handleLogout}>
                Logout
              </button>
            </li>
          </>
        ) : (
          <>
            <li>
              <button className="userArea" onClick={handleRegister}>
                <Link to="/" className="links">
                  Sign Up
                </Link>
              </button>
            </li>
            <li>
              <button className="userArea" onClick={handleLogin}>
                <Link to="/" className="links">
                  Login
                </Link>
              </button>
            </li>
          </>
        )}
      </ul>
    </div>
  );
};
export default Navigation;
