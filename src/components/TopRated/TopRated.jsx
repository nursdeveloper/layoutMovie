import React, {useEffect, useState} from 'react';
import axios from "axios";
import {API_KEY} from "../../API/API";
import './TopRated.scss'
const TopRated = () => {
    const [rated,setRated] = useState([])
    function getRated(key){
        axios(`https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`).then((res)=>{
            setRated(res.data.results)
        })
    }
    useEffect(()=>{
        getRated(API_KEY)
    },[])
    return (
        <div className='container_rated'>
            {
                rated.map((el)=>(
                    <div className='block_rated'>
                        <img className='rated_img' src={`https://image.tmdb.org/t/p/w500/${el.poster_path}`} alt=""/>
                        <p className='rated_title'>{el.title}</p>
                        <p className='rated_date'>{el.release_date}</p>

                    </div>
                ))
            }
        </div>
    );
};

export default TopRated;