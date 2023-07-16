import React from "react";
import {Data} from "../types/data.types";
import {SortTable} from "./sort-table.component";

export const PrettySort: React.FC<Data> = ({list}) => {
    const sortedList = list.sort((a: any,b) => a.date.localeCompare(b.date))
    return <SortTable list={sortedList}/>
}