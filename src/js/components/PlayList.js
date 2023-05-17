import '../../css/PlayList.sass';
import { useEffect, useState } from "react";
import { AiFillPlayCircle, AiFillPauseCircle } from "react-icons/ai";
import { IconContext } from "react-icons";
import  {
  toPlayMusFromList,
  toDelMus,
  toPlayMus,
  toSwithchMus,
  toInicel,
  toForceSwithchMus
} from "../reducers/musicSlice" 
import { useSelector,useDispatch } from 'react-redux'





function PlayList() {

  const dispatch = useDispatch()

  const handleDel = () => {
    dispatch(toDelMus())
  }
  const musId = useSelector((state) => state.musicSlice.idMus)
  const afterMusId = useSelector((state) => state.musicSlice.afterIdMus)
  const musPlay = useSelector((state) => state.musicSlice.isPlayMus)
  const musList = useSelector((state) => state.musicSlice.arrMus)
  const playerHiden = useSelector((state) => state.musicSlice.playerHiden)
  const[currHover,setCurrHover] = useState(false)
  let el=[]

  const playMus = (num) =>{
    if (!musPlay){
      dispatch(toPlayMus(true))
      /* dispatch(toPlayMusFromList([num,true])) */
      dispatch(toForceSwithchMus(num))

    }
    else {
      dispatch(toPlayMusFromList([num,false]))
    }
  }
  if(!(musId==afterMusId)){
    dispatch(toPlayMusFromList([musId,false]))
    setTimeout(() => {
      dispatch(toPlayMus(true))
    }, 200);  
    dispatch(toSwithchMus(musId))
    
  } 
 


  // Cycle for add blocks with music and buttom play
  for(let i=0;i<musList.length;i++){
    el.push(
    <div className='playlist_list_block'> 
      <h3 className='playlist_list_block_mus'>{musList[i].name_Track}</h3>
      <p className='playlist_list_block_mus'>{musList[i].duration_fix}</p>
      <button onMouseLeave={()=>{setCurrHover(false)}} onMouseEnter={() => {setCurrHover({currId:i,currSus:true})}} onClick={()=>{playMus(i)}}  key={i}  className='playlist_button'>
      {(musPlay && musId==i )? (
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

  return (
    <div className="playlist">
      <div className='playlist_header'>
        <div className='playlist_header_block'>
          <h2 className='playlist_header_h2'></h2>
          <div className='playlist_header_line'></div>
        </div>
        <div className='playlist_header_expand'>
          <div className='link'>expand</div>
        </div>
      </div>
      <button onClick={()=>{handleDel()}}>==DEL==</button> 
      <div className='playlist_list'>
        {el}
      </div>
    </div>
  );
  }

  export default PlayList;
  