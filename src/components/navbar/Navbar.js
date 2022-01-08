import React from "react";
import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <nav id="nav">
            <div>
                <Link id="link" to="/home">HOME</Link>
                <Link id="link" to="/about">ABOUT</Link>
                <Link id="link" to="/projects">PROJECTS</Link>
                <Link id="link" to="/contact">CONTACT</Link>
            </div>
        </nav>    
    )
}
export default Navbar