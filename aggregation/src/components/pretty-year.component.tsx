import React from "react";
import {Data} from "../types/data.types";
import {YearTable} from "./year-table.component";

export const PrettyYear: React.FC<Data> = ({list}) => {
    const yearData = list.map(item => {
        const year =  new Date(item.date).getFullYear()
        return {
            year,
            amount: item.amount
        }
    })
    return <YearTable props={yearData}/>
}