import axios from 'axios'
import React, { createContext, useContext, useReducer, useEffect, useState } from 'react'
import typeReducer from '../hooks/typeReducer';




const GetInfluencers = (url) => {
    const token = JSON.parse(localStorage.getItem("token"));
    const [influencers, setInfluencers] = useState()

    useEffect(() => {

        setTimeout(() => {


            const getData = async () => {

                try {
                    const res = await axios.get(url, {
                        headers: {
                            Authorization: `Bearer ${token.idToken}`
                        }

                    })
                    if (res.status === 200) {
                        setInfluencers(res)
                    }



                }
                catch (error) {
                    console.log(error);
                }
            }; getData()

        }, 1000);

    }, [url])
    return influencers

}

export default GetInfluencers



const TypeContext = createContext()

const TypeProvider = ({ children }) => {

    const influencersData = GetInfluencers(`http://localhost:9090/influencer/all`)




    const [typeState, typeDispatch] = useReducer(typeReducer, {
        influencers: [],
        channelFilter: "All",
        genreFilter: "All",
        wishList: false,
    })

    useEffect(() => {
        influencersData?.data &&
            typeDispatch({
                type: 'INITIAL_INFLUENCERS',
                payload: influencersData?.data
            })
    }, [influencersData?.data])


    return (
        <TypeContext.Provider value={{ typeDispatch, typeState }}>{children}</TypeContext.Provider>
    )
}
const useType = () => useContext(TypeContext)

export { TypeProvider, useType }
