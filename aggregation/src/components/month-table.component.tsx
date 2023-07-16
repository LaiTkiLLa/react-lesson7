import React from "react";
import {Month} from "../types/data.types";
import uuid from "react-uuid";

export const MonthTable: React.FC<Month>= (props) => {
    return (
        <div>
            <h2>Month Table</h2>
            <table>
                <tbody>
                    <tr>
                        <th>Month</th>
                        <th>Amount</th>
                    </tr>
                </tbody>
                {props.props.map(item => (
                    <tbody key={uuid()}>
                        <tr>
                            <th>{item.month}</th>
                            <th>{item.amount}</th>
                        </tr>
                    </tbody>
                ))}
            </table>
        </div>
    )
}