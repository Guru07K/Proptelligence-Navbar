import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
    <nav className="bg-gradient-to-r from-slate-950 to-orange-300 text-white fixed top-0 left-0 right-0 shadow-lg z-10">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        
        <Link to="/" className="text-2xl font-semibold">
          Proptelligence
        </Link>

        
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="hover:scale-125 hover:text-slate-800 ">Home</Link>
          <Link to="/products" className="hover:scale-125 hover:text-slate-800 ">Products</Link>
          <Link to="/services" className="hover:scale-125 hover:text-slate-800 ">Services</Link>
          <Link to="/solutions" className="hover:scale-125 hover:text-slate-800 ">Solutions</Link>
        </div>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FiX className="text-2xl" /> : <FiMenu className="text-2xl" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden flex flex-col py-2 gap-2">
          <Link to="/" onClick={() => setIsOpen(false)} className=" text-center hover:text-slate-800 ">Home</Link>
          <Link to="/products" onClick={() => setIsOpen(false)} className=" text-center hover:text-slate-800 ">Products</Link>
          <Link to="/services" onClick={() => setIsOpen(false)} className=" text-center hover:text-slate-800 ">Services</Link>
          <Link to="/solutions" onClick={() => setIsOpen(false)} className=" text-center hover:text-slate-800 ">Solutions</Link>
        </div>
      )}
    </nav>
    </>
  );
}

export default Navbar;
