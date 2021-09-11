import React from "react";
import ArticleView from "../Article/Article";
import "./SLP.scss";

export type Orientation = "left" | "right";
interface SLPProps {
    orientation : Orientation
    imgSource : string,
    textSource : string
    name : string
}

const SLP = (props : SLPProps) : JSX.Element => {
    let imageDiv = (
        <div className="img-div">
            <img
                loading="lazy"
                src={props.imgSource}
                alt={props.name}
            />
        </div>
    )
    let textDiv = (
        <div className="desc">
            <ArticleView source={props.textSource} title={props.name}/>
        </div>
    )
    if (props.orientation === "left") {
        return (
            <div className="left">
                {imageDiv}
                {textDiv}
            </div>
        )
    } else {
        return (
            <div className="right">
                {textDiv}
                {imageDiv}
            </div>
        )
    }
}

export default SLP;