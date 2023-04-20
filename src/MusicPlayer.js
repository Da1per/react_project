import './css/MusicPlayer.css';
import React from 'react';


 import { useEffect, useState } from "react";
import useSound from "use-sound";
import qala from "./music/Orex47-Judas(original mix).mp3";
import { AiFillPlayCircle, AiFillPauseCircle } from "react-icons/ai";
import { BiSkipNext, BiSkipPrevious } from "react-icons/bi";
import { IconContext } from "react-icons";

const playList = [{
  name_Track: "Orex47-Judas(original mix)",
  creator: "Orex47",
  years:"2023",
  src: "./music/Orex47-Judas(original mix).mp3",
  img: "./images/IMG_20160623_142001_3CS.jpg",
  genres: "Progressive House",
  duration_fix: "4:09"
},
{
  name_Track: "Orex47-Alisher Sas",
  creator: "Orex47",
  years:"2023",
  src: "./music/Orex47-Alisher Sas.mp3",
  img: "./images/IMG_20160623_142001_3CS.jpg",
  genres: "Ridim trap",
  duration_fix: "1:01"
},
{
name_Track: "Orex47- Get riz",
  creator: "Orex47",
  years:"2023",
  src: "./music/Orex47- Get riz.mp3",
  img: "./images/IMG_20160623_142001_3CS.jpg",
  genres: "Pop Rock",
  duration_fix: "1:45"
},
{
  name_Track: "Orex47- Root fl",
    creator: "Orex47",
    years:"2023",
    src: "./music/Orex47- Root fl.mp3",
    img: "./images/IMG_20160623_142001_3CS.jpg",
    genres: "Neurofanck",
    duration_fix: "1:41"
  },
  {
    name_Track: "Orex47-Blow back",
      creator: "Orex47",
      years:"2023",
      src: "./music/Orex47-Blow back.mp3",
      img: "./images/IMG_20160623_142001_3CS.jpg",
      genres: "EDM",
      duration_fix: "1:16"
    },
    {
      name_Track: "Orex47-Comming",
        creator: "Orex47",
        years:"2023",
        src: "./music/Orex47-Comming.mp3",
        img: "./images/IMG_20160623_142001_3CS.jpg",
        genres: "Slap House",
        duration_fix: "1:29"
      },
      {
        name_Track: "Orex47-Cyber pool",
          creator: "Orex47",
          years:"2023",
          src: "./music/Orex47-Cyber pool.mp3",
          img: "./images/IMG_20160623_142001_3CS.jpg",
          genres: "G-House",
          duration_fix: "1:10"
        },
        {
          name_Track: "Orex47-Dark",
            creator: "Orex47",
            years:"2023",
            src: "./music/Orex47-Dark.mp3",
            img: "./images/IMG_20160623_142001_3CS.jpg",
            genres: "Techno",
            duration_fix: "0:54"
          },
          {
            name_Track: "Orex47-Down",
              creator: "Orex47",
              years:"2023",
              src: "./music/Orex47-Down.mp3",
              img: "./images/IMG_20160623_142001_3CS.jpg",
              genres: "Future House",
              duration_fix: "2:03"
            },
            {
              name_Track: "Orex47-Goddil",
                creator: "Orex47",
                years:"2023",
                src: "./music/Orex47-Goddil.mp3",
                img: "./images/IMG_20160623_142001_3CS.jpg",
                genres: "Trap",
                duration_fix: "1:11"
              },
              {
                name_Track: "Orex47-Space ship",
                  creator: "Orex47",
                  years:"2023",
                  src: "./music/Orex47-Space ship.mp3",
                  img: "./images/IMG_20160623_142001_3CS.jpg",
                  genres: "Electronic",
                  duration_fix: "1:36"
                },
                {
                  name_Track: "sound1",
                    creator: "Orex47",
                    years:"2023",
                    src: "./music/sound1.wav",
                    img: "./images/IMG_20160623_142001_3CS.jpg",
                    genres: "DnB",
                    duration_fix: "0:11"
                  },
]


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
          <h2 className="player_title">{playList[0].name_Track}</h2>
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
              {currTime.min}:{(currTime.sec>=0 && currTime.sec<10)? `0${currTime.sec}`: currTime.sec}
            </p>
            <p className='player_time_value'>
              {time.min}:{(time.sec>=0 && time.sec<10)? `0${time.sec}`: time.sec}
            </p>
          </div>
        </div>
      </div>
      
      
    </div>
  );
}
 
export default MusicPlayer;