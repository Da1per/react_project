import './css/PlayList.css';
function PlayList({name,num,musSet}) {
  let el=[]
  let sus=''
  const add=(l)=>{
    sus=true
    musSet([num[l].src,num[l].name_Track,num[l].creator,sus])
  }
  for(let i=0;i<num.length;i++){
    el.push(
    <div className='playlist_list_block'> 
      <h3 className='playlist_list_block_mus'>{num[i].name_Track}</h3>
      <p className='playlist_list_block_mus'>{num[i].duration_fix}</p>
      <button key={i} onClick={(e) => {add(i)}} className='playlist_button'></button>
    </div>)
  }
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
  
/* import React from 'react';
class PlayList extends React.Component {  
  constructor(props) {
    super(props);
  }
  cycle(){
    let el=[]
    for(let i=0;i<props.num;i++){
      el.push(
      <div className='playlist_list_block'> 
        <button className='playlist_button'></button>
      </div>)
    }
  }
  render(){
    return (
      <div className="playList">
        <div className='playlist_header'>
          <div className='playlist_header_block'>
            <h2 className='playlist_header_h2'>{props.name}</h2>
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
}
export default PlayList; */