import React, {useEffect, useState} from 'react';
import './App.css';
import {getFetch} from "./fetch/get.fetch";
import {Data} from "./types/data.types";
import {PrettyMonth} from "./components/pretty-month.component";
import {PrettyYear} from "./components/pretty-year.component";
import {PrettySort} from "./components/pretty-sort.component";

function App() {

    const [list, setList] = useState<Data>()

    useEffect( () => {
        const fetchData = async () => {
            const data = await getFetch()
            await setList(data)
        };
        fetchData();
    }, [])

    return (
        <div id="app">
            {list
                ? <>
                    <PrettyMonth list={list.list} />
                    <PrettyYear list={list.list} />
                    <PrettySort list={list.list} />
                </> : <h3>hello</h3>}
        </div>


  );
}

export default App;
