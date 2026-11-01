import axios from 'axios';

export default async function deleteAuthor(idToDelete){
    return axios
    .delete(`http://127.0.0.1:8000/deleteAuthor/${idToDelete}/`)
    .then((res) =>{
        console.log(res)
    })
    .catch((err) =>{
        console.log(err)
    })
}
    