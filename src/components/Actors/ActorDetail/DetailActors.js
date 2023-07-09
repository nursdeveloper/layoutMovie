import React, {useEffect, useState} from 'react';
import axios from "axios";
import {API_KEY} from "../../../API/API";
import {useParams} from "react-router-dom";
import ActorMove from "./actorMove";

const DetailActors = () => {
    const [detailActors,setDetailActors] = useState({})
    const {actorsId} = useParams()
    const getDetailActors = async ()=>{
        const res = await axios(`https://api.themoviedb.org/3/person/${actorsId}?api_key=${API_KEY}&language=en-US`)
        const {data} = await res
        setDetailActors(data)
    }
    useEffect(()=>{
        getDetailActors()
    },[])
    console.log(detailActors)
    return (
        <div className='actors-info'>
            <div className="container">
                <div className="info" style={{
                    marginTop:'120px',
                    display:'flex',
                    alignItems:'center'

                }}>
                    <div>
                        <img style={{
                        borderRadius:'10px',
                            margin:'0 18px 0 50px'
                        }} src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${detailActors.profile_path}`} alt=""/>
                    </div>
                    <div style={{
                        width:'600px'
                    }}>
                        <h2 style={{
                            color:'white'
                        }}>{detailActors.name}</h2>
                        <p style={{
                            color:'white',
                            margin:'10px 0',
                            fontWeight:'300'
                        }}>Biography</p>
                        <h4 style={{
                            color:'white',
                            fontSize:'16px',
                            fontWeight:'200'
                        }}>{detailActors.biography}</h4>
                    </div>
                </div>
                <ActorMove/>
            </div>
        </div>
    );
};

export default DetailActors;