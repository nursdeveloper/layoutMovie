import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import axios from "axios";
import {API_KEY} from "../../../API/API";
import Slider from "react-slick";

const ActorMove = () => {
    const [actorsMove,setActorsMove] = useState([])
    const {actorsId} = useParams()
    const getActorMove = async()=>{
        const url = await axios(`https://api.themoviedb.org/3/person/${actorsId}/movie_credits?api_key=${API_KEY}&language=en-US`)
        const {data} = await url
        setActorsMove(data.cast)
    }
    useEffect(()=>{
        getActorMove()
    },[])
    console.log(actorsMove)
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
    };
    return (
        <div>
            <Slider {...settings}>
                {
                    actorsMove.map((el)=>(
                        <div style={{
                            
                        }}>
                            <Link to={`/movie-detail/${el.id}`}>
                                <img src={`https://www.themoviedb.org/t/p/w150_and_h225_bestv2/${el.poster_path}`} alt="img"/>
                            </Link>
                        <h1>{el.name}</h1>
                        </div>
                    ))
                }
            </Slider>
                   </div>
    );
};

export default ActorMove;