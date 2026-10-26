/* eslint-disable no-unused-vars */
import React, { Component } from 'react'
import "../css/App.css"
import Navbar from "../components/Navbar"
import { Link } from "react-router";

const liStyle = "text-white bg-gray-700 p-4 pl-6 pr-6 h-fit rounded-4xl transition-all delay-75 duration-150 ease-in-out hover:text-3xl hover:cursor-pointer hover:bg-gray-900 hover:p-6 hover:pl-8 hover:pr-8";  

export default function Index() {
    return (
      <>
        <div className="grid h-screen w-screen overflow-hidden place-items-center">
          <div className="text-9xl text-white text-center justify-center">
              Welcome Steven!
              <ul className="flex gap-4 font-bold text-2xl mt-4 justify-center">
                  <Link to="/home" className={liStyle} onClick={null}>Create</Link>
              </ul>
          </div>
        </div>
      </>
    )
}
