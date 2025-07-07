import React, { useState } from "react";
import './Navbar.css';
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const cartProducts = useSelector(state => state.cart);

    function handleClick() {
        setIsOpen(prev => !prev);
    }

    return (
        <>
            <header>
                <h1>Redux App</h1>

                <nav className="nav-links">
                    <Link to="/" className="text-decoration-none h5 text-primary">Home</Link>
                    <Link to="/products" className="text-decoration-none h5 text-primary">Products</Link>
                    <Link to="/mybag" className="text-decoration-none h5 text-primary">
                        <i className="fa-solid fa-bag-shopping"></i>
                        <span id="count">{cartProducts.length}</span>
                    </Link>
                </nav>

                <span className="toggle" onClick={handleClick}>
                    {isOpen ? <i className="fa-solid fa-xmark"></i> : <i className="fa-solid fa-bars"></i>}
                </span>
            </header>

            {isOpen && (
                <div className="dropdown">
                    <Link to="/" className="text-white text-decoration-none" onClick={handleClick}>Home</Link>
                    <Link to="/products" className="text-white text-decoration-none" onClick={handleClick}>Products</Link>
                    <Link to="/mybag" className="text-white text-decoration-none" onClick={handleClick}>
                        My Bag ({cartProducts.length})
                    </Link>
                </div>
            )}
        </>
    );
}

export default Navbar;
