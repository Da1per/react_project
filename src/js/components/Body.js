import  '../../css/Body.sass'
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
import { useSelector,useDispatch } from 'react-redux'

function Body() {
    
    const musOnOff = useSelector((state) => state.musicSlice.playerHiden)

  const [activeTabs, setActiveTabs] = useState({
    tab:"BodyH",
  });
  const [musicsList, setMusicsList] = useState({
    musicsL:'',
  });
  const [currentMusic, setCurrentMusic] = useState({
    musics:'',
  });
  const [openMus, setOpenMus] = useState({
    open:'',
  });
  const activeBbut=(stat)=>{
    setActiveTabs({tab:stat})
  }
  const activeMusicList=(ml)=>{
    setMusicsList({musicsL:ml})
  }
  const activeCurMus=(cm)=>{
    setCurrentMusic({musics:cm})
  }
  
  return (
    <div className="main_body">
      <LeftBar  setActive={activeBbut}/>
      {(activeTabs.tab=="BodyH")?<BodyH musicsFor={musicsList.musicsL} musciNow={activeCurMus}/>:null}
      {(activeTabs.tab=="Generes")?<Generes/>:null}
      {(activeTabs.tab=="New_artist")?<New_artist/>:null}
      {(activeTabs.tab=="Top_tracks")?<Top_tracks/>:null}
      {(activeTabs.tab=="Podcast")?<Podcast/>:null}
      {(activeTabs.tab=="New_tracks")?<New_tracks/>:null}
    {(!musOnOff)?(<MusicPlayer musciNowFor={currentMusic.musics} setMus={activeMusicList} openMus={setOpenMus}/>
    ):null}
    </div>
  );
}
export default Body;
