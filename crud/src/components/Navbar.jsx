import React, { Component } from 'react'
import { Link } from "react-router";

const liStyle = "text-white bg-gray-700 p-4 pl-6 pr-6 h-fit rounded-4xl transition-all delay-75 duration-150 ease-in-out hover:text-3xl hover:cursor-pointer hover:bg-gray-900 hover:p-6 hover:pl-8 hover:pr-8";    

export default function Navbar() {
    return (
        <div className="flex fixed content-center w-screen h-[10vh] justify-center text-center bg-gray-800">
            <ul className="flex gap-4 font-bold text-2xl m-[2.5vh]">
                <Link to="/" className={liStyle} onClick={null}>Back</Link>
                <p className="text-white p-4 pl-6 pr-6 h-fit rounded-3xl">Welcome to the BOOKS dashboard!</p>
            </ul>
        </div>
    )
}
