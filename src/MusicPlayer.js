import './css/MusicPlayer.css';
import React from 'react';


 import { useEffect, useState } from "react";
import useSound from "use-sound";
import qala from "./music/sound1.wav";
import { AiFillPlayCircle, AiFillPauseCircle } from "react-icons/ai";
import { BiSkipNext, BiSkipPrevious } from "react-icons/bi";
import { IconContext } from "react-icons";

 function MusicPlayer() {
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

  const [play, { pause, duration, sound }] = useSound(qala);

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
      setIsPlaying(false);
    } else {
      play();
      setIsPlaying(true);
    }
  };

  return (
    <div className="player">
      <div className='player_buttons'>
        <button className="music_paly_button">
          <IconContext.Provider value={{ size: "calc(5px + 4vw)", color: "#f0f0f0" }}>
            <BiSkipPrevious />
          </IconContext.Provider>
        </button>
        {!isPlaying ? (
          <button className="music_paly_button" onClick={playingButton}>
            <IconContext.Provider value={{ size: "calc(5px + 4vw)", color: "#f0f0f0" }}>
              <AiFillPlayCircle />
            </IconContext.Provider>
          </button>
        ) : (
          <button className="music_paly_button" onClick={playingButton}>
            <IconContext.Provider value={{ size: "calc(5px + 4vw)", color: "#f0f0f0" }}>
              <AiFillPauseCircle />
            </IconContext.Provider>
          </button>
        )}
        <button className="music_paly_button">
          <IconContext.Provider value={{ size: "calc(5px + 4vw)", color: "#f0f0f0" }}>
            <BiSkipNext />
          </IconContext.Provider>
        </button>
      </div>
      <div className='palyer_bar'>
        <div className='player_name'>
          <h2 className="player_title">Drum Loop</h2>
          <p className="player_artist">Orex47</p>
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
              {currTime.min}:{currTime.sec}
            </p>
            <p className='player_time_value'>
              {time.min}:{time.sec}
            </p>
          </div>
        </div>
      </div>
      
      
    </div>
  );
}
 
export default MusicPlayer;