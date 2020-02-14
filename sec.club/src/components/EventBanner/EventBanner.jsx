import React from "react";
import "./EventBanner.scss";

export default function EventBanner({flyerSource, title, desc, endDate}) {
    let flyer = require(`../../assets/flyers/${flyerSource}`)

    if (new Date().getTime() < endDate.getTime() || endDate === undefined) {
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
        return <div></div>
    }
}   