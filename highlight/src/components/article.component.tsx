import React from "react";
import {Articles} from "../types/data.types";
import uuid from "react-uuid";

export const Article: React.FC<Articles> = ({title,views}) => {
    return (
        <div className="item item-article" key={uuid()}>
            <h3><a href="#">{title}</a></h3>
            <p className="views">Прочтений: {views}</p>
        </div>
    )
}