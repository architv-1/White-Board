"use client"
import { UserDetailContext } from '@/context/UserDetailContext'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
function Provider({ children }: { children: React.ReactNode }) {

    const [userDetail , setUserDetail]= useState<any>()

    useEffect(() => {
        CreateNewUser()
    }, [])

    const CreateNewUser = async () => {
        const result = await axios.post('/api/user')
        console.log(result.data)
        setUserDetail(result.data)
    }
    return (

        <UserDetailContext.Provider value={{userDetail , setUserDetail}}>

            <div className=""></div>{children}
        </UserDetailContext.Provider>

    )
}
export default Provider