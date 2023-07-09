import React, {useEffect, useState} from 'react';
import './Header.scss'
import {Link, useNavigate} from "react-router-dom";
const Header = () => {
    const [value,setValue] = useState('')
    const navigate = useNavigate()
    const handleChange = async ()=> {
        navigate(`/movie-search/${value}`)
    }
    useEffect(()=>{
        handleChange()
    },[])
    return (
        <header className='header'>
            <nav className='nav'>
                <div className="search">
                    <input onChange={(e)=>{
                        setValue(e.target.value)
                    }} style={{
                        color:'white',
                        width:'100px'
                    }} type="text" placeholder='Search...'/>
                    <button
                        style={{
                            color:'white',
                            width:'100px',
                            borderRadius:'8px',
                            height:'30px',
                            marginLeft:'10px'
                        }} onClick={handleChange}>Search</button>
                </div>
                <Link to={'/'}>
                    <li>Home</li>
                </Link>
                <Link to={'/popular'}>
                    <li>Popular</li>
                </Link>
                <Link to={'/topRated'}>
                    <li>TopRated</li>
                </Link>
            </nav>
        </header>
    );
};

export default Header;