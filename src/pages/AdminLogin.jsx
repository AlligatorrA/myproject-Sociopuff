
import { Link, useLocation, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { useAuth } from "../hooks/authProvider";
import axios from "axios";
import { GoogleLogin } from '@react-oauth/google';
import { toast } from "react-toastify";
import { parseJwt } from "../utils/common";

const AdminLogin = () => {

    const { token, setToken, username, setUserName, password, setPassword, } = useAuth()
    const location = useLocation()
    const navigate = useNavigate()
    const [roleCss, setRoleCss] = useState(false)
    const [roleOpt, setRoleOpt] = useState('ROLE_INFLUENCER')


    const LoginInputHandle = () => {
        navigate('/')
    }

    return (
        <section className="login-wrapper">
            <div className="login-form">
                <div className="container">
                    <Link className="theme-logo" to="/">
                        <img
                            src="assets/images/logo.png"
                            alt="Project & Resource Tracking System Logo"
                        />
                    </Link>
                    <div className="form_sect">
                        <h1>Admin Login</h1>

                        <form action="" onSubmit={e => e.preventDefault()}>
                            <div className="form-group field">
                                <input
                                    type="email"
                                    name="email"
                                    value={username}
                                    onChange={(e) => setUserName(e.target.value)}
                                    className="form-control email"
                                    placeholder="Email Id/Mobile"
                                />
                            </div>
                            <div className="form-group field mb30">
                                <input
                                    type="password"
                                    name="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="form-control pass"
                                    placeholder="Password/OTP"
                                />
                            </div>
                            <div className="">
                                <button className="btn btn-info" onClick={LoginInputHandle}>
                                    Log in
                                </button>

                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AdminLogin