import { useState, useEffect, use } from "react";
import React from 'react'
import Navbar from "../components/Navbar"
import axios from "axios";

const liStyle = "ml-2 mr-2 text-white bg-gray-700 p-4 pl-6 pr-6 h-fit rounded-4xl transition-all delay-75 duration-150 ease-in-out hover:text-2xl hover:cursor-pointer hover:bg-red-300 hover:p-6 hover:pl-8 hover:pr-8"; 
const thStyle = "p-3 border-2 bg-gray-700"

export default function Home() {  
    const [authors, setAuthors] = useState()

    useEffect(() =>{
        axios
        .get("http://127.0.0.1:8000/author")
        .then((response) =>{
            setAuthors(response.data)
        })
        .catch((error) => {
            console.error("Error fetching tasks:", error);
        });
    }, [])
    
    return (
        <div>
            <Navbar/>
            <div id="crud-container" className="grid gap-3.5 justify-center">
                <div className="mt-[20vh] ">
                    <ul className="flex justify-center">
                        <li className={liStyle} onClick={null}>Create</li>
                        <li className={liStyle} onClick={null}>Update</li>
                        <li className={liStyle} onClick={null}>Refresh</li>
                        <li className={liStyle} onClick={null}>Delete</li>
                    </ul>
                </div>
                <div className="grid text-white bg-gray-600 h-[50vh] w-[70vw] rounded-4xl place-content-center">
                    <h1 className="text-6xl mb-6">My Books</h1>
                    <table className="w-[69vh] rounded-4xl text-left">
                        <thead>
                            <tr>
                                <th className={thStyle}>ID</th>
                                <th className={thStyle}>NAME</th>
                                <th className={thStyle}>BIO</th>
                                <th className={thStyle}>CREATED AT</th>
                            </tr>
                        </thead>
                        <tbody>
                            {authors?.map((author) =>(
                                <tr className="w-[69vh]">
                                    <td className={thStyle} id="id">{author.id}</td>
                                    <td className={thStyle} id="name">{author.name}</td>
                                    <td className={thStyle} id="bio">{author.bio}</td>
                                    <td className={thStyle} id="created_at">{author.created_at}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
