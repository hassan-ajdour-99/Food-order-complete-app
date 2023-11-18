import React from "react";
import "../../index.css";
import logoImg from "../../assets/logo.jpg";

function Header() {
  return (
    <header id="main-header">
      <div id="title">
        <img src={logoImg} alt="logo-image" />
        <h1> Foodie </h1>
      </div>
      <nav>
        <button>Cart(1)</button>
      </nav>
    </header>
  );
}
export default Header;
