import React from "react";
import {Video, video} from "./video.component";
import uuid from "react-uuid";

type videoList = {
    list: video[]
}

export const VideoList:any= ({list}: videoList) => {
    return list.map(item => <Video key={uuid()} url={item.url} date={item.date} />);
}