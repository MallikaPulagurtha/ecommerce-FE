import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { postUserLogin } from "./api";


function Login() {
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
                        let loginData = await postUserLogin(userData);
                        window.localStorage.setItem("loginToken", loginData.data.token);
                        console.log(loginData.data);

                        let token = loginData.data.token;
                        // console.log(token);
                        if (token) {
                            history.push(`/main/${loginData.data.id}`);
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
                                    <h3 classname="title">Welcome Back!</h3>
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
                                    <button className="btn float-right login_btn">Sign In</button>
                                </div>
                                <div className="card-footer">
                                    <div className="d-flex justify-content-center links">
                                        Have an account?
                                </div>
                                    <div className="d-flex justify-content-center">
                                        <Link to="/register">Sign Up</Link>
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

export default Login;