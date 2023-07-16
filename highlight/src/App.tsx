import React, {useState} from 'react';
import './App.css';
import {ListsData} from "./data/lists.data";
import {List} from "./components/list.component";

function App() {
  const [list, setList] = useState(ListsData);

  return (
      <List list={list} />
  );
}

export default App;
