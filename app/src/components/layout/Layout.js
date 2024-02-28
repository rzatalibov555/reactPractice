import React from "react";
import "./layout.css"
import { AddClass } from '../../hoc/AddClass'
import { Header } from "../header/Header";
import { Home } from "../../pages/home/Home";
import { Sidebar } from "../sidebar/Sidebar";

const Layout = () =>{

    return(
        <>
            <Header/>
            <div className="content">

                <div className="routes">
                    <Home/>
                </div>


                <Sidebar/>

            </div>
        </>
    )

}

export default AddClass(Layout, 'layout')