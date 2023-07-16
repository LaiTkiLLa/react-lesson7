import React from "react";
import {Year} from "../types/data.types";
import uuid from "react-uuid";

export const YearTable: React.FC<Year> = (props) => {
    return (
        <div>
            <h2>Year Table</h2>
            <table>
                <tbody>
                    <tr>
                        <th>Year</th>
                        <th>Amount</th>
                    </tr>
                </tbody>
                {props.props.map(item => (
                    <tbody key={uuid()}>
                        <tr>
                            <th>{item.year}</th>
                            <th>{item.amount}</th>
                        </tr>
                    </tbody>

                ))}
            </table>
        </div>
    )
}