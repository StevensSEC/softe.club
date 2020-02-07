import React from "react";
import "./EventBanner.scss";

export default function EventBanner({source, title, desc}) {
    let flyer = require(`../../assets/flyers/${source}`)

    return(
        <div className="flyer">
            <div className="container">
                <img src={flyer.default} alt={`${source}`}/>
                <div className="text-container">
                    <span className="title">{title}</span>
                    <span className="description">{desc}</span>
                </div>
            </div>
        </div>
    )

}