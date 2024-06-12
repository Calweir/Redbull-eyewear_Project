import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Navigation from "./components/Navigation";
import UserSignup from "./components/userSignup";
import Login from "./components/login";
import Products from "./components/Products";
import { useState } from "react";
import ShoppingCart from "./components/shoppingCart";
import { useDispatch, useSelector } from "react-redux";
import { login } from "./components/authSlice";
import { addItemToCart } from "./components/cartSlice";

function App() {
  //Again declared dispatch / selector to allow for changes in state and finding the properties of the sign up authentication and cart items.
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.isAuthenticated);
  const cartItems = useSelector((state) => state.cart.cartItems);

  //Used state and declared both as false, as this allows the website to update the state to true once the user opens the login link or the sign up link.
  const [loginOpen, setloginOpen] = useState(false);
  const [registerOpen, setRegisterOpen] = useState(false);

  const handleLogin = () => setloginOpen(true);
  const handleLoginClose = () => setloginOpen(false);

  const handleRegister = () => setRegisterOpen(true);
  const handleRegisterClose = () => setRegisterOpen(false);

  const setRegisterUsername = (username) => {
    dispatch(login({ username }));
  };
  //Both dispatch methods used to action a state of setting the given username of the end user within the navigation header links.
  const setUserLogin = (username) => {
    dispatch(login({ username }));
  };

  return (
    <Router>
      <div className="App">
        <Navigation
          handleLogin={handleLogin}
          userLogin={user?.username}
          handleRegister={handleRegister}
          registerUsername={user?.username}
        />
        {registerOpen && (
          <UserSignup
            handleRegisterClose={handleRegisterClose}
            setRegisterUsername={setRegisterUsername}
          />
        )}
        {loginOpen && (
          <Login
            handleLoginClose={handleLoginClose}
            setUserLogin={setUserLogin}
          />
        )}
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route
            path="/products"
            element={
              <Products
                addItemToCart={(product) => dispatch(addItemToCart(product))}
              />
            }
          />
          <Route
            path="/shoppingCart"
            element={<ShoppingCart cartItems={cartItems} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
