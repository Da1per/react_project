import './css/MusicPlayer.sass';
import React from 'react';
 import { useEffect, useState } from "react";
import useSound from "use-sound";
import { AiFillPlayCircle, AiFillPauseCircle } from "react-icons/ai";
import { BiSkipNext, BiSkipPrevious } from "react-icons/bi";
import { IconContext } from "react-icons";

function importAll(r) {
  return r.keys().map(r);
}
const musics = importAll(require.context('./music', false, /\.(mp3|wav)$/));
 function MusicPlayer({musciNowFor}) {
  const [volumeButton, volumeButtonSet] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [time, setTime] = useState({
    min: "",
    sec: ""
  });
  const [currTime, setCurrTime] = useState({
    min: "",
    sec: ""
  });
  const [seconds, setSeconds] = useState();

  let musNowAc="/react_project/static/media/Orex47-Judas(original mix).d2d930ea0a5360262cf5.mp3"
  let nameMus="Orex47-Judas(original mix)"
  let nameAut="Orex47"
  let nameSus1 =''
  let nameSus2 =''

  if(musciNowFor){
    musNowAc=musciNowFor[0]
    nameMus=musciNowFor[1]
    nameAut=musciNowFor[2]
    nameSus1=musciNowFor[3]
    nameSus2=musciNowFor[4]
  }

  const [sus, setSus] = useState();


  const [volume, setVolume] = React.useState(1);
  const [play, { pause, duration, sound }] = useSound(musNowAc,{volume});
  
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
  }, [isPlaying]);

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
  
  const playingButton = () => {
    if (isPlaying) {
      pause();
      nameSus2(true)
      setIsPlaying(false);
    } else {
      play();
      setIsPlaying(true);
      nameSus2(false)
    }
  };

  
  
  useEffect(() => {
    if(musciNowFor[3]){
      if(isPlaying){
        setTimeout(() => { 
          playingButton()
        },500);  
        setSus(true)
      }
      else{
        setTimeout(() => { 
          /* playingButton() */
          setSus(true)
        },500); 
      }
      musciNowFor[3]=false
      if(sus){
        playingButton()
        setSus(false)
      }
    
      console.log(sus)
    }
  })

  return (
    <div className="player" onMouseLeave={()=>{volumeButtonSet(false)}}>
      
      <div className='player_buttons'>
        <button className="music_paly_button_1">
          <IconContext.Provider value={{ size: "calc(5px + 1.5vw)", color: "#f0f0f0" }}>
            <BiSkipPrevious />
          </IconContext.Provider>
        </button>
        {!isPlaying ? (
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
          
             <h2 className="player_title" >{nameMus}</h2>
             
          
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
        <div className='volume_control'>
        <button className='volume_control_button' onMouseEnter={() => {volumeButtonSet(true)}}>
            o
          </button>
        {(volumeButton)?(<input  
            min="0" 
            max="1" 
            value={volume}  
            step={0.02} 
            default="1" 
            type="range"  
            className="player_volume"
            onChange={event => {
              setVolume(event.target.valueAsNumber) 
          }}></input>):null}
          
        
          
        
      </div>
      </div>
    </div>
  );
}
 
export default MusicPlayer;