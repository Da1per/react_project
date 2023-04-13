import './css/MusicPlayer.css';
import React from 'react';
class MusicPlayer extends React.Component {
  render(){
    return (
      <div className="App">
        <div className='container'>
          <div className='player'>
           
            
              <div className='controls'>
                <div><i class="fa-solid fa-backward fa-xl"></i></div>
                <div><i class="fa-solid fa-play fa-beat-fade fa-2xl"></i></div>
                <div><i class="fa-solid fa-forward fa-xl"></i></div>

              </div>
              <input type='range'  value='0' id='progress'></input>
              <div className='img_track'></div>

            
              
            
          </div>
        </div>

      </div>
    );
  }
}
  export default MusicPlayer;