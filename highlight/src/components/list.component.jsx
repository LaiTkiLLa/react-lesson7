import React from "react";
import {Video} from "./video.component";
import {Article} from "./article.component";
import uuid from "react-uuid";
import {New} from "./new.component";
import {Popular} from "./popular.component";

export function switchContent(item) {
    switch (item.type) {
        case 'video':
            return (
                <Video {...item} key={uuid()}/>
            );

        case 'article':
            return (
                <Article {...item} key={uuid()}/>
            );
    }
}

export const List = ({list}) => {
    return list.map(item => {
        switch (true) {
            case (item.views < 100):
                return <New>{switchContent(item)}</New>
            case (item.views > 1000):
                return <Popular>{switchContent(item)}</Popular>
            default:
                return switchContent(item)
        }
    });
}