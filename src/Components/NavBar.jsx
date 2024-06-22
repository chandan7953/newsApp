import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { IoMdMenu } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { setCategory } from "../redux/articlesSlice";
import "./Navbar.css";

const Navbar = () => {
  const { category } = useSelector((state) => state.articles);
  const [menuOpen, setMenuOpen] = useState(false);
  const dispatch = useDispatch();

  const handleCategory = (str) => {
    dispatch(setCategory(str));
  };

  return (
    <nav>
      <div className="flex justify-around items-center p-4">
        <Link to="/" className="title">
          NewsApp
        </Link>

        {menuOpen ? (
          <RxCross2
            className="menu"
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              fontSize: "2rem",
            }}
          />
        ) : (
          <IoMdMenu
            className="menu"
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              fontSize: "2rem",
            }}
          />
        )}
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <NavLink
            to="/"
            onClick={() => {
              handleCategory("everything");
            }}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/business"
            onClick={() => {
              handleCategory("business");
            }}
          >
            Business
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/sports"
            onClick={() => {
              handleCategory("sports");
            }}
          >
            Sports
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/technology"
            onClick={() => {
              handleCategory("technology");
            }}
          >
            Technology
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/environment"
            onClick={() => {
              handleCategory("environment");
            }}
          >
            Environment
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
