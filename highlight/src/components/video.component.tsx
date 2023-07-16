import React from "react";
import {Videos} from "../types/data.types";
import uuid from "react-uuid";

export const Video: React.FC<Videos> = ({url, views}) => {
    return (
        <div className="item item-video" key={uuid()}>
            <iframe src={url} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
            <p className="views">Просмотров: {views}</p>
        </div>
    )
}