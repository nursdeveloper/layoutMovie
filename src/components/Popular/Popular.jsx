import React, {useEffect, useState} from 'react';
import axios from "axios";
import {API_KEY} from "../../API/API";
import './Popular.scss'
import {Link} from "react-router-dom";
const Popular = () => {
    const [popular,setPopular] = useState([])
    function getPopular (key){
        axios(`https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`).then((res)=>{
            setPopular(res.data.results)
            console.log(res.data.results)
        })
    }
    useEffect(()=>{
        getPopular(API_KEY)
    },[])
    return (
        <div className='container_population'>
            {popular.map((el)=>(
                    <Link to={`/movie-detail/${el.id}`}>
                        <div className='block_population'>
                            <img className='popular_img' src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${el.poster_path}`} alt=""/>
                            <p className='popular_title'>{el.title}</p>
                            <p className='popular_date'>{el.release_date}</p>
                        </div>
                    </Link>
                ))
            }
        </div>
    );
};

export default Popular;