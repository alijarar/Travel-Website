import React, { useState } from "react";
import "./navbarStyles.css";
// import {Link} from 'react-router-dom'
import { MenuItems } from "./MenuItems";

function Navbar() {
  const [clickState,setClickState] = useState(false)

  const handleClickIcon = () =>{
    setClickState(!clickState)
  }


  return (
    <nav className="NavBarItems">
      <h1 className="navBar-logo">Test</h1>
      <div className="manu-icons">
        <i className={clickState?"fas fa-times":"fas fa-bars"}
        onClick={()=>{handleClickIcon()}}></i>

      </div>

      <ul className={clickState?"nav-menu active":"nav-menu"}>
        {MenuItems.map((item, index) => (
          <li key={index} className="menu-items">
            <a className={item.cName} href={item.url}>
              <i className={item.icon}></i>{item.title}
            </a>
          </li>
        ))}
        <button>Sign Up</button>
      </ul>
    </nav>
  );
}

export default Navbar;
