import React from "react";
import Navbar from "./NavBar/Navbar";
import RegisterBtn from "./register/registerBtn";
import "./Header.css";

const Header = () => {
  const displaySize = window.innerWidth;
  return (
    <div className="container">
      <div className="nav__wrapper">
        <div className="logo">
          <div className="logo__img">
            <i class="bx bx-dumbbell"></i>
          </div>
          <h2 className="logo_text">Power House</h2>
        </div>
        {displaySize > 900 && (

        <Navbar />
        )}

        <div className="btn_holder">
        {displaySize > 900 ? (
          <RegisterBtn />
        ) : (
          <span className="mobile_menu">
            <i class="bx bx-menu"></i>
          </span>
        )}
          
        </div>
      </div>
    </div>
  );
};

export default Header;
