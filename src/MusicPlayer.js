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




let curMus='/react_project/static/media/Orex47-Judas(original mix).d2d930ea0a5360262cf5.mp3'
let newMus=''
let nameMus="Orex47-Judas(original mix)"



 function MusicPlayer({musciNowFor}) {
     newMus=musciNowFor[0]
     
     
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



  let nameSus1=musciNowFor[3]
  let  nameSus2=musciNowFor[4]




  const [volume, setVolume] = React.useState(1);
  const [play, { pause, duration, sound }] = useSound(curMus,{volume});
  
  
  
  
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
      if(nameSus2!==undefined)nameSus2(true)
      setIsPlaying(false);} 
    else {
      play();
      setIsPlaying(true);
      if(nameSus2!==undefined)nameSus2(false)
    }}

    useEffect(() => {
      if(newMus==curMus){
        
        if(!isPlaying && nameSus1){
          /* playingButton() */
          
          console.log(sound.noAudio)
          console.log(isPlaying,nameSus1,curMus)
          /* playingButton()  */
        }
      } 
    })

  useEffect(() => {
      if(nameSus1){
          playingButton() 
      }
      else{
          pause()
          setIsPlaying(false)
      }
  },[nameSus1])

  useEffect(() => {
      if(newMus!=curMus){
          pause()
          setIsPlaying(false)
          curMus=newMus
          nameMus=musciNowFor[1]
          if(nameSus2!==undefined)nameSus2(true)
      } 
      
    },[nameSus1])

  return (
    <div className="player" >
      
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
        <div className='volume_control' onMouseLeave={()=>{volumeButtonSet(false)}}>
        <button className='volume_control_button' onMouseEnter={() => {volumeButtonSet(true)}}>
        <i class="fa-solid fa-volume-low fa-2xl"></i>
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