import React, {useState} from 'react';
import './App.css';
import {VideoList} from "./components/video-list.component";
import {VideoData} from "./data/video.data";

function App() {
  const [list, setList] = useState<{url: string, date: string}[]>(VideoData);
  return (
      <VideoList list={list} />
  );
}

export default App;
