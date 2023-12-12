import axios from "axios";
import { createContext, useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { parseJwt } from "../utils/common";
import { ROLE_BRAND, ROLE_INFLUENCER } from "../utils/constants";
import React from "react";
const AuthContext = createContext()

const AuthProvider = ({ children }) => {
    const navigate = useNavigate()
    const localStorageToken = JSON.parse(localStorage.getItem('accessToken'))
    const localStorageIdToken = JSON.parse(localStorage.getItem('idToken'))
    const [token, setToken] = useState(localStorageToken && localStorageToken?.accessToken)
    const [idToken, setIdToken] = useState(localStorageIdToken && localStorageIdToken?.idToken)
    const [username, setUserName] = useState("")
    const [password, setPassword] = useState("")

    const LoginInputHandle = async () => {
        if (username !== "" & password !== '') {
            const data = { username: username, password: password }
            try {
                const res = await axios.post(`http://localhost:9090/user/authenticate`, data)
                if (res.status === 201) {
                    toast("Log In Successfully")
                    console.log(res);
                    localStorage.setItem('token', JSON.stringify({
                        accessToken: res.data.accessToken,
                        idToken: res.data.idToken
                    }))
                    setToken(res.data.accessToken)
                    setIdToken(res.data.idToken)

                    const accessToken = token
                    const accessTokenParse = parseJwt(accessToken)


                    if (accessTokenParse.roles[0] === ROLE_BRAND) {
                        navigate(`/createcampaign`)

                    } else if (accessTokenParse.roles[0] === ROLE_INFLUENCER) {
                        navigate(`/influencercreate`)

                    }

                }

            } catch (error) {
                console.log(error);
            }
        } else {
            toast("Enter Proper Password")
        }
    }



    const LogOutHandle = () => {
        setTimeout(() => {
            localStorage.removeItem("accessToken")
            setToken("")
            navigate("/")

        }, 2000);

    }
    return <AuthContext.Provider value={{ username, setUserName, password, setPassword, LoginInputHandle, LogOutHandle, idToken }}>{children}</AuthContext.Provider>

}
const useAuth = () => useContext(AuthContext)
export { useAuth, AuthProvider }