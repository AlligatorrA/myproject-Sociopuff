import { Link, useLocation, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { useAuth } from "../hooks/authProvider";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { GoogleLogin } from '@react-oauth/google';
import { toast } from "react-toastify";

const Login = () => {
  const { token, setToken, username, setUserName, password, setPassword, LoginInputHandle, LogOutHandle, } = useAuth()
  const location = useLocation()
  const navigate = useNavigate()
  const [roleCss, setRoleCss] = useState(false)
  const [roleOpt, setRoleOpt] = useState('ROLE_INFLUENCER')



  // login()


  return (
    <>
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
              <h1>Log in</h1>
              <p>
                Don't have an account?{" "}
                <Link to="/createaccount">Create an account</Link>
              </p>
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
                <div className=""> {
                  token ?
                    <>
                      <span>already login </span>
                      <button className="btn btn-info" onClick={LogOutHandle}>Log Out</button>
                    </>
                    :
                    <button className="btn btn-info" onClick={LoginInputHandle}>
                      Log in
                    </button>}
                  <a href="#" className="forgot-password">
                    Forgot Password?
                  </a>
                </div>
                <div className="or">- OR -</div>
                <div className="social-login">
                  <div className="form-group d-flex  justify-content-center">

                    <div >
                      <img src="assets/images/google.png" alt="" onClick={() => (setRoleCss(roleCss => !roleCss))} style={roleCss ? { "display": "none" } : { "display": "block" }

                      } />
                      <div className={` lo ${roleCss ? "form_sect " : "role_optionUpdated"}`}>
                        <span className="selectSpan">select your Role</span>
                        <select name="role_option" id="role_option" className="selectSpan"
                          defaultValue={roleOpt}
                          onChange={(e) =>
                            setRoleOpt(e.target.value)
                          }>

                          <option value="ROLE_INFLUENCER">ROLE_INFLUENCER</option>
                          <option value="ROLE_BRAND">ROLE_BRAND</option>
                        </select>
                        <GoogleLogin
                          onSuccess={async credentialResponse => {
                            console.log(credentialResponse, 'credent');
                            const data = credentialResponse.credential
                            try {
                              const res = await axios.post(`http://localhost:9090/user/googleAuthenticate`, {
                                authorizationCode: data,
                                role: roleOpt
                              })
                              console.log(res, 'response');
                              if (res.status === 201) {
                                toast.success("Log In Successfully")
                                localStorage.setItem('idToken', JSON.stringify({
                                  idToken: res.data.idToken
                                }))

                                if (roleOpt === "ROLE_BRAND") {
                                  navigate("/createcampaign")
                                }
                                else if (roleOpt === "ROLE_INFLUENCER") {
                                  navigate("/influencercreate")
                                }
                              }


                            } catch (error) {
                              console.log(error);
                            }
                          }}
                        />;
                        {/* <button className="btn btn-info" onClick={ 

                        }> */}
                        {/* </button> */}

                      </div>
                    </div>

                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>{" "}
    </>
  );
};

export default Login;
