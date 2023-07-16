import React from "react";

type dateTime = {
    date: string
}

export const DateTime: React.FC<dateTime> = ({date}) => {
    return (
        <p className="date">{date}</p>
    )
}