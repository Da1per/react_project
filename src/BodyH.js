import './css/BodyH.css';
import PlayList from './PlayList';
import musicPad from './images/music_pad.png'
import React from 'react';
class BodyH extends React.Component {
  render(){
    return (
      <div className="body_h">
          <div className='body_h_header'>
            <h1>Your music is here</h1>
            <img className='body_h_img' src={musicPad} alt='music img' ></img>
          </div>
          <PlayList name={'NOW LISTENING'} num={12}/>
          <PlayList name={'DESERT PLAYLISTS'} num={12}/>

      </div>
    );
  }
}
  export default BodyH;