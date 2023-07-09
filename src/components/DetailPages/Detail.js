import React, {useEffect, useState} from 'react';
import axios from "axios";
import {useParams} from "react-router-dom";
import {API_KEY} from "../../API/API";
import './Detail.scss'
import Actors from "../Actors/Actors";
import Trailer from "../Trailer/Trailer";

const Detail = () => {
    const [detail,setDetail]=useState({})
    const {movieId} = useParams()
    const getDetailPage = async () =>{
        const url = await axios(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=en-US`)
        const {data} = await url
        setDetail(data)
    }
    useEffect(()=>{
        getDetailPage()
    },[])
    return (
        <div id='detail-card' style={{
            background: `url("https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces${detail.backdrop_path}") no-repeat left/cover`,
            height: '100vh'
        }}>
            <div className="container">
                <div className="detail-card">
                    <img className='images' src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${detail.poster_path}`} style={{
                    width:'450px',height:'550',objectFit:'contain'
                    }
                    } alt=""/>
                    <div className="detail-card--description">
                        <h2 style={{color:'white'}}>{detail.title} {detail.relase_date ? detail.relase_date.slice(0,4) : ''}</h2>
                        <p className='p' style={{color:'white'}}>{detail.title}</p>
                        <p style={{color:'white'}}>{detail.overview}</p>
                        <div className="vote">
                            <h3>
                                {Math.round(detail.vote_average * 10)}%
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
            <Actors/>
            <Trailer/>
        </div>
    );
};

export default Detail;