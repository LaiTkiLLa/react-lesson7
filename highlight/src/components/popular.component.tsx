import React from "react";
import {Children} from "../types/data.types";
import uuid from "react-uuid";

export const Popular: React.FC<Children> = ({children}) => {
    return (
        <div className="wrap-item wrap-item-popular" key={uuid()}>
            <span className="label">Popular!</span>
            {children}
        </div>
        )
}