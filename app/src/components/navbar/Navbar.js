import React from "react";
import './navbar.css'

export const Navbar = () => {
    return(
        <nav>
            <ul>
                <li><a href='/'>Home</a></li>
                <li><a href='/calc'>Calculator</a></li>
                <li><a href='/sample'>Category</a></li>
                <li><a href='/info'>About</a></li>
            </ul>
        </nav>
    )
}