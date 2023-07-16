import React from "react";
import {Data} from "../types/data.types";
import uuid from "react-uuid";

export const SortTable: React.FC<Data> = ({list}) => {
    return (
        <div>
            <h2>Sort Table</h2>
            <table>
                <tbody>
                    <tr>
                        <th>Date</th>
                        <th>Amount</th>
                    </tr>
                </tbody>
                {list.map(item => (
                    <tbody key={uuid()}>
                        <tr>
                            <th>{String(item.date)}</th>
                            <th>{item.amount}</th>
                        </tr>
                    </tbody>

                ))}
            </table>
        </div>
    )
}