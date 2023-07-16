import React from "react";
import {Children} from "../types/data.types";
import uuid from "react-uuid";


export const New: React.FC<Children> = ({children}) => {
    return (
        <div className="wrap-item wrap-item-new" key={uuid()}>
            <span className="label">New!</span>
            {children}
        </div>
    )
}