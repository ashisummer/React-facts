import React from "react";
import logo from "../images/favicon.ico"

export default function Navbar(){
    return <nav>
        <img src = {logo} alt="react-logo"/>
        <h3>ReactFacts</h3>
        <h4> React Course - Project 1</h4>
    </nav>
}