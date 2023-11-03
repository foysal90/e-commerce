import React from "react";
import { Link } from "react-router-dom";
import { BiCartAlt } from 'react-icons/bi';

// import logo from'../../assets/new_logo-removebg-preview.png';
const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-base-200">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            {/* for mobile view */}
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
             <li>
                <Link to={"/home"}> Home</Link>
              </li>
              <li>
                <Link to={"/products"}> Products </Link>
              </li>
              <li>
                <Link to={"/about"}> About us </Link>
              </li>
              <li>
                <Link to={"contact"}> Contact us </Link>
              </li>
            </ul>
          </div>
          {/* <div>
          <img className="max-h-20 w-56" src={logo} alt="" />
        </div> */}
           <Link className="btn btn-ghost normal-case text-xl">E-commerce</Link> 
         
        </div>

        {/* for desktop view */}
        <div className="navbar-center hidden lg:flex ">
          <ul className="menu menu-horizontal px-1">
          <li>
            
                <Link to={"/home"}> Home</Link>
              </li>
              <li>
                <Link to={"/products"}> Products </Link>
              </li>
              <li>
                <Link to={"/about"}> About us </Link>
              </li>
              <li>
                <Link to={"contact"}> Contact us </Link>
              </li>
          </ul>
        </div>
        
        <div className="navbar-end gap-8">
        <BiCartAlt className="h-8 w-8" />
          <Link to={"/login"} className="btn">Log in</Link>
          
        </div>
      </div>
    </div>
  );
};

export default Navbar;
