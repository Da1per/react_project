import './css/PlayList.css';
function PlayList(props) {
  let el=[]
  for(let i=0;i<props.num;i++){
    el.push(
    <div className='playlist_list_block'> 
      <button className='playlist_button'></button>
    </div>)
  }
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
  
  export default PlayList;