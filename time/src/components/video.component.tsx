import React from "react";
import {ChangeDateTime} from "./change-date-time.component";

export type video = {
    url: string,
    date: string
}

export const Video: React.FC<video> = ({url, date}) => {
    return (
        <div className="video" >
            <iframe src={url} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
            <ChangeDateTime date={date} />
        </div>
    )
}