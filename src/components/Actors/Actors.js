import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import axios from "axios";
import './Actors.scss'
import {API_KEY} from "../../API/API";
import Slider from "react-slick";
const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
};

const Actors = () => {
    const [actors,setActors] = useState([])
    const {movieId} = useParams()
    const getActors = async () =>{
        const url = await axios(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`)
        const {data} = await url
        setActors(data.cast)
    }
    useEffect(()=>{
        getActors()
    },[])
    console.log(actors)
    return (
        <div id='actors'>
            <div className="container">
                <div className="actors">
                    <h1>cast</h1>
                    <Slider {...settings}>
                    {
                            actors.map(el =>(
                                <div className='blocks'>
                                    <div className="block">
                                        <Link to={`/actors-detail/${el.id}`}>
                                            <img src={`https://www.themoviedb.org/t/p/w138_and_h175_face${el.profile_path}`} alt="img"/>
                                        </Link>

                                        {/*{*/}
                                        {/*    el.profile_path ?  :*/}
                                        {/*        <img src={user} alt=""/>*/}
                                        {/*}*/}
                                        <h1>{el.name}</h1>
                                    </div>
                                </div>
                            ))
                        }
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default Actors;