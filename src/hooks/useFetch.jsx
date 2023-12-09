import { useGoogleLogin } from '@react-oauth/google'
import axios from 'axios'
import React, { useState, useEffect } from 'react'

const useFetchGet = (url) => {
    const [data, setData] = useState('')
    const [loader, setLoader] = useState(false)
    const [error, setError] = useState('')

    useEffect(() => {
        setLoader(true)
        setTimeout(() => {
            const getData = async (res) => {
                try {
                    await axios.get(url)
                    setLoader(false)
                    setData(res.data)
                } catch (error) {
                    setLoader(false)
                    setError(error)
                }
            }; getData()
        }, 100);
    }, [url])
    return {
        data, loader, error
    }
}
const useFetchPost = (url) => {
    const [data, setData] = useState('')
    const [loader, setLoader] = useState(false)
    const [error, setError] = useState('')

    useEffect(() => {
        setLoader(true)
        setTimeout(() => {
            const getData = async (res) => {
                try {
                    await axios.post(`https://localhost:9090/${url}`, data)
                    setLoader(false)
                    setData(res.data)
                } catch (error) {
                    setLoader(false)
                    setError(error)
                }
            }; getData()
        }, 100);
    }, [url])
    return {
        data, loader, error
    }
}


// const GoogleLogin = useGoogleLogin({
//     onSuccess: tokenResponse => {

//         console.log(tokenResponse);
//         try {
//             axios.post(`http://localhost:9090/user/googleAuthenticate`, {
//                 authorizationCode: tokenResponse.access_token,
//                 role: "ROLE_BRAND"
//             }, {
//                 headers: {
//                     'Content-Type': 'application/json',
//                     'Authorization': 'Bearer '
//                 },
//             })
//                 .then((response) => console.log(response))
//         } catch (error) {
//             console.log(error);

//         }
//     }


// });
export { useFetchGet, useFetchPost }