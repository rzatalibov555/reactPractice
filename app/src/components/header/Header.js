import React from "react";
import './header.css'
import { Navbar } from "../navbar/Navbar";

export const Header = () => {
    return(
        <div className="header">
            <div className="headerWrap">

                <div className="logo">
                    <a href='/'><h2>RateApp</h2></a>
                </div>
            
                <Navbar/>

                <div className="person">
                    <i className="fa fa-user" aria-hidden="true"></i>
                </div>


                

            </div>

            <hr/>
        </div>
    )
}