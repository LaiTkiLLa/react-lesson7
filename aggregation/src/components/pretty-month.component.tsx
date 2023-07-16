import React from "react";
import {Data} from "../types/data.types";
import {MonthTable} from "./month-table.component";

export const PrettyMonth: React.FC<Data> = ({list}) => {
    const monthArray: {[key: number]: string} = {
        0: "Jan",
        1: "Feb",
        2: 'March',
        3: "Apr",
        4: "May",
        5: "June",
        6: "July",
        7: "Aug",
        8: "Sept",
        9: "Oct",
        10: 'Nov',
        11: "Dec"
    }
    const month = list.map(item => {
        const monthIndex =  new Date(item.date).getMonth()
        return {
            month: monthArray[monthIndex],
            amount: item.amount
        }
    })
    return <MonthTable props={month}/>
}