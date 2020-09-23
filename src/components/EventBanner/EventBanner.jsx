import React from "react";
import "./EventBanner.scss";
import dayjs from 'dayjs';

export default function EventBanner({flyerSource, altText, title, desc, startDate, endDate, meetingLink, isGbm, now=dayjs()}) {
    let flyer = flyerSource ? require(`../../assets/flyers/${flyerSource}`) : null;
    let imageElement = flyer ? <img loading="lazy" src={flyer.default} alt={altText ? `${altText}` : `Flyer for ${title ? `${title} ` : ""}event`}/> : null;

    let inProgress = startDate && endDate && startDate.isBefore(now) && endDate.isAfter(now);

    console.log("EVENT", title, isGbm, now.toString(), startDate ? startDate.subtract(7, 'day').toString() : startDate);
    if ((!endDate || now.isBefore(endDate)) && (!startDate || !isGbm || startDate.subtract(7, 'day').isBefore(now))) {
        return(
            <div className="flyer">
                {startDate ? startDate.format("MMM. D, h:mm a") : null}
                <div className="container">
                    {imageElement}
                    <div className="text-container">
                        <span className="title">{title}</span>
                        <span className="description">{desc}</span>
                        { inProgress ? <em>Happening right now!</em> : null }
                        { meetingLink ? <span className="description">Join here: <a href={meetingLink}>{meetingLink}</a></span> : null }
                    </div>
                </div>
            </div>
        )
    } else {
        return null
    }
}