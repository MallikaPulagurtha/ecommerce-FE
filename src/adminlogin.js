import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { postAdminLogin } from "./api";

function AdminLogin() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    let userData = { email, password };
    let history = useHistory();

    return (
        <>
            <div class="loginbg">
                <form onSubmit={async (e) => {
                    e.preventDefault();
                    try {
                        let loginData = await postAdminLogin(userData);
                        window.localStorage.setItem("adminToken", loginData.data.token);
                        console.log(loginData.data);

                        let token = loginData.data.token;
                        if (token) {
                            history.push(`/admindesk/${loginData.data.id}`);
                        }
                        else {
                            history.push('/login');
                            alert("Email or Password is incorrect");
                        }

                    } catch (error) {
                        console.log(error);
                    }
                }}>
                    <div className="container loginform">
                        <div className="d-flex justify-content-center h-100">
                            <div className="card login">
                                <div className="card-header">
                                    <h3 classname="title">Admin Login</h3>
                                </div>
                                <div className="card-body">
                                    <div className="input-group form-group">
                                        <input type="text" className="form-control" value={email} placeholder="Email Address" onChange={(e) => {
                                            setEmail(e.target.value)
                                        }} />
                                    </div>
                                    <div className="input-group form-group">
                                        <input type="password" className="form-control" value={password} placeholder="Password" onChange={(e) => {
                                            setPassword(e.target.value)
                                        }} />
                                    </div>
                                    <button className="btn float-right login_btn">Sign In as administrator</button>
                                </div>
                                <div className="card-footer">
                                    <div className="d-flex justify-content-center links">
                                        Not an Admin?
                                </div>
                                    <div className="d-flex justify-content-center">
                                        <Link to="/login">Login as a User</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default AdminLogin;