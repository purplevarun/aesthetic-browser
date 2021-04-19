import React from 'react';
import './Home.css';
import {Link} from "react-router-dom";
function Home() {
    return (
        <div className='home'> 
            <h1>this is the homepage</h1>
            <div className='home__header'>
                <div className='home__headerLeft'></div>                
                {/* we use link not anchor tag because it does not refresh */}
                <Link to="/images">Images</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
            </div>
            <div className='home__body'>
                <div className='home__headerRight'></div>
                
            </div>
        </div>
    )
}

export default Home;
