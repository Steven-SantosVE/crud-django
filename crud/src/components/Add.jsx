import React, {useEffect, useState} from "react";
import axios from "axios";

const modalStyle = "flex-col h-[80vh] w-[26vw] bg-white mt-35 rounded-4xl shadow-2xs shadow-purple-800"
const inputTextStyle = "border border-black w-[95%] h-[5vh] resize-none rounded-2xl"

export default function Add({isVisible, onClose}){
    const [addAuthor, setAddAuthor] = useState('');
    const [addBio, setAddBio] = useState('');

    function submitAuthor(){
        axios
        .post("http://127.0.0.1:8000/addAuthor", {
            name: addAuthor,
            bio: addBio,
        }).then((res) =>{
            console.log(res.data + " Author added succesfully")
        }
        ).catch((err)=>{
            console.log(err);
        })
    }

    return(
        <div className={"grid fixed justify-center w-screen h-screen bg-gray-400/30 " + (isVisible ? "visible" : "invisible")}>
            <div className={modalStyle}>
                <div className="">
                    <p onClick={onClose} className="sticky text-6xl font-extrabold ml-[85%] mt-[2%] hover:cursor-pointer">x</p>
                    <h1 className="text-4xl m-10 font-bold border-b-2 border-gray-400 pb-5">Add Authors</h1>
                </div>
                
                <form className="flex flex-col ml-10 gap-2">
                    
                    <p className="text-2xl">Name</p>
                    <input 
                        type='text' 
                        className={inputTextStyle} 
                        value={addAuthor}
                        onChange={e => setAddAuthor(e.target.value)}
                    /> 

                    <p className="text-2xl">Bio</p>
                    <input 
                        type='text'
                        className={inputTextStyle} 
                        value={addBio}
                        onChange={e => setAddBio(e.target.value)}/
                     >

                    <input onClick={()=> submitAuthor()} type='submit' className={inputTextStyle + 
                        " bg-purple-800 text-white font-bold text-3xl \
                        mt-11 h-[90px] rounded-[50rem] transition-all delay-75 \
                        duration-150 ease-in-out hover:cursor-pointer\
                        hover:bg-purple-600"}
                    />       
                </form>
            </div>
        </div>
    )
}
