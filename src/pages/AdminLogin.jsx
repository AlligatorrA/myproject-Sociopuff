
import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { toast } from "react-toastify";

const AdminLogin = () => {

    const navigate = useNavigate()
    const [adminData, setAdminData] = useState({
        useName: "",
        password: ""
    })



    const validatePassword = password => {
        const uppercaseRegex = /[A-Z]/;
        const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/;

        if (!uppercaseRegex.test(password)) {
            toast.error("Password must contain 1 or more uppercase characters.");
            return false;
        }

        if (!specialCharRegex.test(password)) {
            toast.error("Password must contain 1 or more special characters.");
            return false;
        }

        if (password.length < 8) {
            toast.error("Password must be at least 8 characters long.");
            return false;
        }

        return true;
    };

    const validateEmail = email => {
        // Basic email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const isValid = emailRegex.test(email);

        if (!isValid) {
            toast.error("Invalid email address.");
        }

        return isValid;
    };



    const handleChange = (e) => {
        const { name, value } = e.target;
        setAdminData({ ...adminData, [name]: value })

        console.log(adminData);

        navigate('/')
    }

    const AdminLoginHandle = (e) => {
        const isEmailValid = validateEmail(adminData.email);
        const isPasswordValid = validatePassword(adminData.password);

        if (!isEmailValid || !isPasswordValid) {
            return;
        }
        try {

        } catch (error) {

        }


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
                                    name="email
                                    required"
                                    value={adminData.useName}
                                    onChange={handleChange}
                                    className="form-control email"
                                    placeholder="Email Id/Mobile"
                                />
                            </div>
                            <div className="form-group field mb30">
                                <input
                                    type="password"
                                    name="password"
                                    required
                                    value={adminData.password}
                                    onChange={handleChange}
                                    className="form-control pass"
                                    placeholder="Password/OTP"
                                />
                            </div>
                            <div className="">
                                <button className="btn btn-info" onClick={AdminLoginHandle}>
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