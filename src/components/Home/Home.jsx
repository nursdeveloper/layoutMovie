import React from 'react';
import './Home.scss'
import img from '../../img/home-img.jpg'
const Home = () => {
    return (
        <div className='container'>
            <div className="hero">
                <div className="hero_img">
                    <img className='img' src={img} alt="img"/>
                </div>
            </div>
        </div>
    );
};

export default Home;