import React from "react";
import {DateTime} from "./date-time.component";



export const ChangeDateTime: React.FC<{date: string}> = ({date}) => {
    const difference = Date.now() - new Date(date).getTime()
    let newDate
    switch (true){
        case (difference >= 3_600_000 && difference < 86_400_000):
            newDate = '5 часов назад'
            break
        case (difference >= 86_400_000):
            newDate = `${Math.floor(difference / (1000 * 60 * 60 * 24))} дней назад`
            break
        default:
            newDate = '12 минут назад'
    }
    return (
        <DateTime date={newDate} />
    )
}