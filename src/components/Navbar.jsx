import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Library Management System</h1>
        <div>
          <Link to="/" className="mx-2 hover:text-gray-300">
            Home
          </Link>
          <Link to="/members" className="mx-2 hover:text-gray-300">
            Members
          </Link>
          <Link to="/records" className="mx-2 hover:text-gray-300">
            Borrow Records
          </Link>
          <Link to="/books" className="mx-2 hover:text-gray-300">
            Books
          </Link>
          <Link to="/register" className="mx-2 hover:text-gray-300">
            Register
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
