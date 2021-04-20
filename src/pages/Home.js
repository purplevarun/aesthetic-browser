import React from 'react';
import './Home.css';
import {Link} from "react-router-dom";
function Home() {
    return (
        <div className='home'> 
            {/* <h1>this is the homepage</h1> */}
            <div className='home__header A'>
                <div className='home__headerLeft'>
                    {/* we use link not anchor tag because it does not refresh */}
                    <img src="img-dark.png" className="IMG" alt=""/>
                    <Link to="/images">Images</Link>
                    <img src="vid-dark.png" className="IMG" alt=""/>
                    <Link to="/videos">Videos</Link>
                    
                </div>
                <div className='home__headerRight'>
                    <img src="abt-dark.png" className="IMG" alt=""/>
                    <Link to="/about">About</Link>
                    <img src="contact-dark.png" className="IMG" alt=""/>
                    <Link to="/contact">Contact</Link>
                </div>
            </div>
            
        </div>
    )
}

export default Home;
