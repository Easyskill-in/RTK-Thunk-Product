import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const Test = () => {
    const data = JSON.parse(localStorage.getItem("IsLogin"));
    console.log("Data is :", data)
    if (data) {
        return <Outlet />
    } else {
        return <Navigate to="/" />
    }
}

export default Test
