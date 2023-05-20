import '../../css/MusicPlayer.sass';
import React from 'react';
 import { useEffect, useState } from "react";
import useSound from "use-sound";
import { AiFillPlayCircle, AiFillPauseCircle } from "react-icons/ai";
import { BiSkipNext, BiSkipPrevious } from "react-icons/bi";
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { styled } from '@mui/material/styles';
import { IconContext } from "react-icons";
import PlayerVolumeSlider from "./PlayerVolumeSlider"
import { useSelector,useDispatch } from 'react-redux'
import   {
  toPlayMus,
} from "../reducers/musicSlice" 


function importAll(r) {
  return r.keys().map(r);
}
const musics = importAll(require.context('../../music', false, /\.(mp3|wav)$/));


function MusicPlayer() {
  
  //текущая музыка
  const musCur = useSelector((state) => state.musicSlice.curMus)

  //состояние включения музыки 
  const musPlay = useSelector((state) => state.musicSlice.isPlayMus) 

  const dispatch = useDispatch()

  //функция управлением состоянием музыки
  const handleChanged = (n) => {
    dispatch(toPlayMus(n))
  }
  //состояние наводки на значек громкости
  const [volumeButton, volumeButtonSet] = useState(false);

  const [time, setTime] = useState({
    min: "",
    sec: ""
  });
  const [currTime, setCurrTime] = useState({
    min: "",
    sec: ""
  });
  const [seconds, setSeconds] = useState();
  //состояние громкости 
  const [volume, setVolume] = React.useState(1);
  
  const [play, { pause, duration, sound }] = useSound(musCur,{volume});
  let volume1 = 100
  useEffect(() => {setTimeout(() => {
    setVolume ()
    
  }, 100);},[volume])
  useEffect(() => {
    if (duration) {
      const sec = duration / 1000;
      const min = Math.floor(sec / 60);
      const secRemain = Math.floor(sec % 60);
      setTime({
        min: min,
        sec: secRemain
      });
    }
  }, [musPlay]);
  useEffect(() => {
    const interval = setInterval(() => {
      if (sound) {
        setSeconds(sound.seek([]));
        const min = Math.floor(sound.seek([]) / 60);
        const sec = Math.floor(sound.seek([]) % 60);
        setCurrTime({
          min,
          sec
        });
      }
    }, 20);
    return () => clearInterval(interval);
  }, [sound]);
  
  //кнопка включения и выключения музыки
  const playingButton = () => {
    if (musPlay) {
      handleChanged(false)}
    else {
      handleChanged(true)
    }
  }

  //проерка включения музыки 
  useEffect(()=>{
    if(musPlay) {
      if(isNaN(currTime.sec)){
        //если музыка не загркзилась то ждем 1с
        setTimeout(() => {
          play();
          handleChanged(true)
        }, 1000);
      }
      else{
        play();
        handleChanged(true)
      }
  }
    else{
        pause()
        handleChanged(false);
    }
  },[musPlay,sound])



  return (
      

      
    <div className="player" >
      <div className='player_buttons'>
        <button className="music_paly_button_1">
          <IconContext.Provider value={{ size: "calc(5px + 1.5vw)", color: "#f0f0f0" }}>
            <BiSkipPrevious />
          </IconContext.Provider>
        </button>
        {!musPlay ? (
          <button className="music_paly_button_3" onClick={playingButton}>
            <div className='music_paly_button_3_treug'>
              <i class="fa-solid fa-play fa-2xl"></i>
            </div>
            
          </button>
        ) : (
          <button className="music_paly_button_2" onClick={playingButton}>
            <div className='music_paly_button_2_stop'>
            <i class="fa-solid fa-pause fa-spin fa-2xl"></i>
            </div>
          </button>
        )}
        <button className="music_paly_button_1">
          <IconContext.Provider value={{ size: "calc(5px + 1.5vw)", color: "#f0f0f0" }}>
            <BiSkipNext />
          </IconContext.Provider>
        </button>
      </div>
      <div className='palyer_bar'>
        <div className='player_name'>
          <div className='player_fastString'>
          

             <h2 className="player_title" ></h2>
             
          
          </div>
        </div>
        <div className='player_status'>
        <input
            type="range"
            min="0"
            step='0.01'
            max={duration / 1000}
            default="0"
            
            value={seconds}
            className="player_status_timeline"
            onChange={(e) => {
              sound.seek([e.target.value]);
            }}
          />
          <div className="player_time">
            
            
            <p className='player_time_value'>
              {currTime.min}:{(currTime.sec>=0 && currTime.sec<10)? `0${currTime.sec}`: currTime.sec}
            </p>
            <p className='player_time_value'>
              {time.min}:{(time.sec>=0 && time.sec<10)? `0${time.sec}`: time.sec}
            </p>
          </div>
        </div>
        <div className='volume_control' onMouseLeave={()=>{volumeButtonSet(false)}}>
        <button className='volume_control_button' onMouseEnter={() => {volumeButtonSet(true)}}>
        <i class="fa-solid fa-volume-low fa-2xl"></i>
          </button>

        {(volumeButton)?(<PlayerVolumeSlider value={volume1}/>):null}
      </div>
      </div>
    </div>

      

      
  )
}
 
export default MusicPlayer;