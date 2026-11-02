// COMPONENTS
import Navbar from "../components/Navbar"
import Add from "../components/Add"
import Update from "../components/Update"

//REST API
import {loadData, deleteAuthor} from "../api/apiAuthorRequests.js"

// LIBRARIES
import { useState, useEffect } from "react";
import React from 'react'

const liStyle = "ml-2 mr-2 text-white bg-gray-700 p-4 pl-6 pr-6 h-fit rounded-4xl transition-all delay-75 duration-150 ease-in-out hover:text-2xl hover:cursor-pointer hover:bg-red-300 hover:p-6 hover:pl-8 hover:pr-8"; 
const thStyle = "p-3 bg-gray-700"

export default function Home() {  
    const [authors, setAuthors] = useState([])
    const [isAddVisible, setIsAddVisible] = useState(false)
    const [isUpdateVisible, setIsUpdateVisible] = useState(false)
    const [idToUpdate, setIdToUpdate] = useState(null);

    useEffect(() =>{
        loadData()
        .then((data) =>{
            setAuthors(data);
        })
    }, [])
    
    return (
        <div>
            <Navbar/>
            <Add onClose={()=> setIsAddVisible(false)} isVisible={isAddVisible}/>
            <Update onClose={() => setIsUpdateVisible(false)} isVisible={isUpdateVisible} idToUpdate={idToUpdate}/>
            <div id="crud-container" className="grid gap-3.5 justify-center">
                <div className="mt-[20vh] ">
                    <ul className="flex justify-center">
                        <li className={liStyle} onClick={()=> setIsAddVisible(true)}>Create</li>
                        <li className={liStyle} onClick={()=> loadData()}>Refresh</li>
                    </ul>
                </div>
                <div className="grid text-white h-fit w-fit p-10 place-content-center  overflow-y-scroll scrollbar-none">
                    <h1 className="text-6xl mb-6">My Books</h1>
                    <table className="w-fit rounded-4xl text-left">
                        <thead>
                            <tr>
                                <th className={thStyle}>ID</th>
                                <th className={thStyle}>NAME</th>
                                <th className={thStyle}>BIO</th>
                                <th className={thStyle}>CREATED AT</th>
                                <th className={thStyle}></th>
                            </tr>
                        </thead>
                        <tbody>
                            {authors?.map((author) =>(
                                <tr className="w-fit transition-all hover:scale-105 hover:cursor-pointer hover:text-gray-400 z-0"
                                key={author.id} 
                                onClick={()=> {
                                    setIdToUpdate(author.id); 
                                    setIsUpdateVisible(true);
                                }}>
                                    <td className={thStyle} id="id" onMouseOver={null}>{author.id}</td>
                                    <td className={thStyle} id="name">{author.name}</td>
                                    <td className={thStyle} id="bio">{author.bio}</td>
                                    <td className={thStyle} id="created_at">{author.created_at}</td>
                                    <td className={thStyle + " bg-red-500 hover:bg-red-400"} 
                                    onClick={(e) => {
                                        e.stopPropagation(); 
                                        deleteAuthor(author.id)
                                        .then(() =>{
                                            loadData()
                                            .then((data) =>{
                                                setAuthors(data);
                                            })
                                        })
                                    }}>DELETE</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <Add/>
        </div>
    )
}
