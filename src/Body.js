import './css/Body.css';
import LeftBar from './LeftBar';
import BodyH from './BodyH';
import React from 'react';
import Generes from './Generes'
import New_artist from './New_artist'
import Top_tracks from './Top_tracks'
import New_tracks from './New_tracks'
import Podcast from './Podcast'
import MusicPlayer from './MusicPlayer';
import {useState } from "react";
function Body() {
  const [activeTabs, setActiveTabs] = useState({
    tab:"BodyH",
  });
let stat2=''
  const activeBbut=(stat)=>{
    stat2=stat
    setActiveTabs({tab:stat2})
  }
  return (
    <div className="main_body">
      <LeftBar  setActive={activeBbut}/>
      {(activeTabs.tab=="BodyH")?<BodyH/>:null}
      {(activeTabs.tab=="Generes")?<Generes/>:null}
      {(activeTabs.tab=="New_artist")?<New_artist/>:null}
      {(activeTabs.tab=="Top_tracks")?<Top_tracks/>:null}
      {(activeTabs.tab=="Podcast")?<Podcast/>:null}
      {(activeTabs.tab=="New_tracks")?<New_tracks/>:null}
      <MusicPlayer/>
    </div>
  );
}
export default Body;
