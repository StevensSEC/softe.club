import React from "react";
import { Card } from "@material-ui/core";
import "./flyer.scss"

export default function Flyer({source}) {
    let flyer = require(`../../assets/flyers/${source}`);

    return(
        <Card className="flyer">
            <div>
                <img src={flyer.default} alt={`${source}`}/>
            </div>
        </Card>
    )

}