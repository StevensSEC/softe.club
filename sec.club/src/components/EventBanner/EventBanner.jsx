import React from "react";
import "./EventBanner.scss";

export default function EventBanner({flyerSource, title, desc, endDate}) {
    let flyer = require(`../../assets/flyers/${flyerSource}`)

    if (endDate === undefined || new Date().getTime() < endDate.getTime()) {
        return(
            <div className="flyer">
                <div className="container">
                    <img src={flyer.default} alt={`${flyerSource}`}/>
                    <div className="text-container">
                        <span className="title">{title}</span>
                        <span className="description">{desc}</span>
                    </div>
                </div>
            </div>
        )
    } else {
        return null
    }
}   