import React from "react"
import { Link, useHistory } from "react-router-dom";

function Topbar() {
    return (
        <>
            {/* <header> */}
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <h2><a href="/">Life is an Art</a></h2>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                <div class="navbar-collapse collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav ml-auto">
                        <a class="nav-link" href="/adminlogin">Admin</a>
                        <a class="nav-link" href="/login">Login</a>
                        <a class="nav-link" href="/register">Register</a>
                        <a class="nav-link" href="/" onClick={() => {
                            window.localStorage.removeItem("loginToken");
                        }}>Logout</a>
                    </div>
                </div>
            </nav>
            {/* </header> */}
        </>
    )
}

export default Topbar;