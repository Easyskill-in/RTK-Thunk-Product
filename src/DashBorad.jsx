import React from 'react'
import { Link, Outlet, Route, Routes } from 'react-router-dom'

const DashBoard = () => {
    return (
        <div>
            <div className="main">

                <div className="left">
                    <Link to="/dashBoard/profile">Profile</Link>
                    <br />
                    <Link to="/dashBoard/About">About</Link>
                </div>
                <div className="sidebar">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default DashBoard
