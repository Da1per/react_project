import './css/PlayList.sass';
import { useEffect, useState } from "react";
import { AiFillPlayCircle, AiFillPauseCircle } from "react-icons/ai";
import { IconContext } from "react-icons";

// array musics
const playList = [{
  name_Track: "Orex47-Judas(original mix)",
  creator: "Orex47",
  years:"2023",
  src: "/react_project/static/media/Orex47-Judas(original mix).d2d930ea0a5360262cf5.mp3",
  img: "./images/IMG_20160623_142001_3CS.jpg",
  genres: "Progressive House",
  duration_fix: "4:09"
},
{
  name_Track: "Orex47-Alisher Sas",
  creator: "Orex47",
  years:"2023",
  src: "/react_project/static/media/Orex47-Alisher Sas.4b9becfb499ae3ace19c.mp3",
  img: "./images/IMG_20160623_142001_3CS.jpg",
  genres: "Ridim trap",
  duration_fix: "1:01"
},
{
name_Track: "Orex47- Get riz",
  creator: "Orex47",
  years:"2023",
  src: "/react_project/static/media/Orex47- Get riz.8b1dff297bb43bf7d2fa.mp3",
  img: "./images/IMG_20160623_142001_3CS.jpg",
  genres: "Pop Rock",
  duration_fix: "1:45"
},
{
  name_Track: "Orex47- Root fl",
    creator: "Orex47",
    years:"2023",
    src: "/react_project/static/media/Orex47- Root fl.85b81230607bc1d0aa27.mp3",
    img: "./images/IMG_20160623_142001_3CS.jpg",
    genres: "Neurofanck",
    duration_fix: "1:41"
  },
  {
    name_Track: "Orex47-Blow back",
      creator: "Orex47",
      years:"2023",
      src: "/react_project/static/media/Orex47-Blow back.cb7e1bedd30d73e5cd0e.mp3",
      img: "./images/IMG_20160623_142001_3CS.jpg",
      genres: "EDM",
      duration_fix: "1:16"
    },
    {
      name_Track: "Orex47-Comming",
        creator: "Orex47",
        years:"2023",
        src: "/react_project/static/media/Orex47-Comming.a72e72450ab832e019cb.mp3",
        img: "./images/IMG_20160623_142001_3CS.jpg",
        genres: "Slap House",
        duration_fix: "1:29"
      },
      {
        name_Track: "Orex47-Cyber pool",
          creator: "Orex47",
          years:"2023",
          src: "/react_project/static/media/Orex47-Cyber pool.287dd47afb3e47a0bd44.mp3",
          img: "./images/IMG_20160623_142001_3CS.jpg",
          genres: "G-House",
          duration_fix: "1:10"
        },
        {
          name_Track: "Orex47-Dark",
            creator: "Orex47",
            years:"2023",
            src:  "/react_project/static/media/Orex47-Dark.82f71c437f12857ad967.mp3",
            img: "./images/IMG_20160623_142001_3CS.jpg",
            genres: "Techno",
            duration_fix: "0:54"
          },
          {
            name_Track: "Orex47-Down",
              creator: "Orex47",
              years:"2023",
              src: "/react_project/static/media/Orex47-Down.5beb799471bc9765f9bf.mp3",
              img: "./images/IMG_20160623_142001_3CS.jpg",
              genres: "Future House",
              duration_fix: "2:03"
            },
            {
              name_Track: "Orex47-Goddil",
                creator: "Orex47",
                years:"2023",
                src: "/react_project/static/media/Orex47-Goddil.3ee7e3e93d62e599b816.mp3",
                img: "./images/IMG_20160623_142001_3CS.jpg",
                genres: "Trap",
                duration_fix: "1:11"
              },
              {
                name_Track: "Orex47-Space ship",
                  creator: "Orex47",
                  years:"2023",
                  src: "/react_project/static/media/Orex47-Space ship.36a9d6675e7d8dbe9a2e.mp3",
                  img: "./images/IMG_20160623_142001_3CS.jpg",
                  genres: "Electronic",
                  duration_fix: "1:36"
                },
                {
                  name_Track: "sound1",
                    creator: "Orex47",
                    years:"2023",
                    src: "/react_project/static/media/sound1.c445dfdcd2417a0e7491.wav",
                    img: "./images/IMG_20160623_142001_3CS.jpg",
                    genres: "DnB",
                    duration_fix: "0:11"
                  },
]




function PlayList({name,musSet}) {
  let el=[]
  const [currSus, setCurrSus] = useState(true);
  const [currNum, setCurrNum] = useState();
  const [currHover, setCurrHover] = useState({
    curId:'',
    currSus: false
  });
  // add music in player
  const add=(l)=>{
    if(currSus){
      setCurrSus(false)
      musSet([playList[l].src,playList[l].name_Track,playList[l].creator,currSus,setCurrSus])
      setCurrNum(l)
    }
    else{ setCurrSus(true)
      musSet([playList[l].src,playList[l].name_Track,playList[l].creator,currSus,setCurrSus])
      setCurrNum(l)}
    console.log(currSus)
  }

  // Cycle for add blocks with music and buttom play
  for(let i=0;i<playList.length;i++){
    el.push(
    <div className='playlist_list_block'> 
      <h3 className='playlist_list_block_mus'>{playList[i].name_Track}</h3>
      <p className='playlist_list_block_mus'>{playList[i].duration_fix}</p>
      <button onMouseLeave={()=>{setCurrHover(false)}} onMouseEnter={() => {setCurrHover({currId:i,currSus:true})}}  key={i} onClick={(e) => {add(i)}} className='playlist_button'>
      {(!currSus && currNum==i )? (
            <IconContext.Provider  value={{ size: "calc(18px + 3vw)", color: "#ce861a7e" }}>
              <AiFillPauseCircle />
            </IconContext.Provider>):(
            <IconContext.Provider value={(currHover&&currHover.currId==i)?{ size: "calc(15px + 3vw)", color: "#ffa2167e" }:{ size: "calc(10px + 3vw)", color: "#ffa2167e" }}>
              <AiFillPlayCircle />
            </IconContext.Provider>)
          }
      </button>
    </div>)
  }
/*   onMouseLeave
  onMouseEnter */
  return (
    <div className="playList">
      <div className='playlist_header'>
        <div className='playlist_header_block'>
          <h2 className='playlist_header_h2'>{name}</h2>
          <div className='playlist_header_line'></div>
        </div>
        <div className='playlist_header_expand'>
          <div className='link'>expand</div>
        </div>
      </div>
      <div className='playlist_list'>
        {el}
      </div>
    </div>
  );
  }

  export default PlayList;
  