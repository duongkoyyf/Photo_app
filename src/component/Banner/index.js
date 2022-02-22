import React from "react";
import { Link } from "react-router-dom";
import './Banner.scss'
function Banner(props){
    const {title,background}=props;
    const bannerStyle=background?{backgroundImage:`url(${background})`}:{}
    return (
        <section className="banner" style={bannerStyle}>
            <h1 className="banner__title" >
                {title}
            </h1>
            
        </section>
    )
}
export default Banner;