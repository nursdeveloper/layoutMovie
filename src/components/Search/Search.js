import React, {useEffect, useState} from 'react';
import axios from "axios";
import {API_KEY} from "../../API/API";
import {Link, useParams} from "react-router-dom";

const Search = () => {
    const [search,setSearch] = useState([])
    const {movieName} = useParams()
    const getSearch = async ()=>{
        const url = await axios(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${movieName}`)
        const {data} = await url
        setSearch(data.results)
    }
    useEffect(()=>{
        getSearch()
    },[])
    console.log(search)
    return (
        <div className='container_population'>
            {search.map((el)=>(
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

export default Search;