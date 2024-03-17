import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="navbar">
      <h1
        className=""
        onClick={() => {
          navigate("/");
        }}
      >
        Pokedex
      </h1>
    </div>
  );
};

export default Navbar;
