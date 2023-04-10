import './css/BodyH.css';
import PlayList from './PlayList';
import MusicPlayer from './MusicPlayer';
function BodyH() {
    return (
      <div className="body_h">
          <PlayList/>
          <MusicPlayer/>
        test text
      </div>
    );
  }
  
  export default BodyH;