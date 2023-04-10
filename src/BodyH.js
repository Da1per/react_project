import './css/BodyH.css';
import PlayList from './PlayList';
import MusicPlayer from './MusicPlayer';
import musicPad from './images/music_pad.png'
function BodyH() {
    return (
      <div className="body_h">
          <div className='body_h_header'>
            <h1>Your music is here</h1>
            <img className='body_h_img' src={musicPad} alt='music img' ></img>
            </div>
          <PlayList/>
          <MusicPlayer/>
      </div>
    );
  }
  
  export default BodyH;