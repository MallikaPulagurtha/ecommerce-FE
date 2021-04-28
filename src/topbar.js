import React from "react"
import { Link, useHistory } from "react-router-dom";

function Topbar() {
    return (
        <>
            <header>
                <h2><a href="/">Life is an Art</a></h2>
                <nav>
                    <li><a href="#">Products</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Help</a></li>
                    <li><Link to="/adminlogin">Admin</Link></li>
                    <li><Link to="/login" onClick={() => {
                        window.localStorage.removeItem("loginToken");
                    }}>Logout</Link></li>
                </nav>
            </header>
        </>
    )
}

export default Topbar;