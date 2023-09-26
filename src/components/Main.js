import React, { useState } from "react";
import Card from "./Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";


const Main= () => {
    const [search,setSearch]=useState("");
    const [bookData,setData]=useState([]);
    const searchBook= (evt) =>{
        if(evt.key==="Enter")
        {
            axios.get('https://www.googleapis.com/books/v1/volumes?q='+search+'&key=AIzaSyBqEvL41tZ_48pRjNczQZVn4LKNL3amGeE'+'&maxResults=40')
            .then(res=>setData(res.data.items))
            .catch(err=>console.log(err))
        }
    }
    return (
        <>
            
                <div className = "header">
                        <div className = "row1">
                            <h1>Комната без книг похожа на <br/> тело без души</h1>
                        </div>
                        <div className = "row2">
                            <h2>Найди книгу</h2>
                            <div className = "search">
                                <input type= "text" placeholder="Введи название" 
                                value={search} onChange={e=>setSearch(e.target.value)}
                                onKeyPress={searchBook}/>
                                <button>
                                <FontAwesomeIcon icon={faMagnifyingGlass}  />
                                </button>
                            </div>
                            <img className="photo" src="./images/book2.webp" alt="" />
                        </div>
                </div>

                <div className="container">
                   {
                    <Card book={bookData} />
                   } 
                   
                </div>
               
        </>
    )
};
export default Main;
