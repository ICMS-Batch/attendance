import { useRef } from "react";
import * as navbar from "./css/navbar.css";
const NavBar = () => {
  const navRef = useRef();
  const toggleNav = () => {
    navRef.current.classList.toggle("responsive_nav");
  };
  return (
    <header>
      <div className="avatar">
        <img
          src="https://images.unsplash.com/photo-1610862169846-80fb009ed591?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDl8fHBvdHJhaXR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
          className="avatar-img"
        />
        <p>John Doe</p>
      </div>
      <nav ref={navRef}>
        <a>Home</a>
        <a>Attendance</a>
        <a>History</a>
        <button className="nav-btn nav-close-btn" onClick={toggleNav}>
          <img src="/assets/cross.svg" />
        </button>
      </nav>
      <button
        onClick={toggleNav}
        style={{ backgroundColor: "white", border: "none" }}
      >
        <img src="/assets/hamburger.svg" />
      </button>
    </header>
  );
};

export default NavBar;
