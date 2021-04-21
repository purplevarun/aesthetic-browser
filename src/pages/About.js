import React from "react";
import "./About.css";
const About = () => {
    const linkedin = () => {
        window.open("https://www.linkedin.com/in/varun-kedia-11061115a/");
    }
    return (
        <div className="main_page">  
            Made By - <div className="name" onClick={linkedin}>Varun Kedia</div>
            <br/>
            Email - <span style={{color:"blue"}}>purplevarun@gmail.com</span>
        </div>
    )
};
export default About;