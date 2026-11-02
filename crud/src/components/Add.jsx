import React, {useEffect, useState} from "react";

//REST API
import {submitAuthor} from "../api/apiAuthorRequests.js"

const modalStyle = "flex-col h-[70vh] w-[40vw] bg-white rounded-4xl shadow-2xs shadow-purple-800 mt-10"
const inputTextStyle = "border border-black w-full h-[30%] resize-none rounded-2xl"

export default function Add({isVisible, onClose}){
    const [addAuthor, setAddAuthor] = useState('');
    const [addBio, setAddBio] = useState('');

    return(
        <div className={"grid fixed justify-center w-screen h-screen bg-gray-400/30 " + (isVisible ? "visible" : "invisible")}>
            <div className={modalStyle}>
                <div className="">
                    <p onClick={onClose} className="sticky text-6xl font-extrabold ml-[85%] mt-[2%] hover:cursor-pointer">x</p>
                    <h1 className="text-4xl m-10 font-bold border-b-2 border-gray-400 pb-5">Add Authors</h1>
                </div>
                
                <form className="flex flex-col items-center gap-2  w-full">
                    
                    <div className="w-full max-w-md p-5">
                        <label className="block text-2xl text-left">Name</label>
                        <input 
                            type='text' 
                            className={inputTextStyle} 
                            value={addAuthor}
                            onChange={e => setAddAuthor(e.target.value)}
                        /> 
                    </div>

                    <div className="w-full max-w-md p-5">
                        <label className="block text-2xl text-left">Bio</label>
                        <input 
                            type='text'
                            className={inputTextStyle} 
                            value={addBio}
                            onChange={e => setAddBio(e.target.value)}/
                        >
                    </div>

                    <input onClick={()=> submitAuthor({addAuthor, addBio})} type='submit' className={
                        " bg-purple-800 text-white font-bold text-3xl \
                        mt-11 h-full p-5 rounded-[50rem] transition-transform delay-75 \
                        duration-150 ease-in-out hover:cursor-pointer\
                        hover:bg-purple-600 w-[60%]"}
                    />       
                </form>
            </div>
        </div>
    )
}
