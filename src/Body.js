import './css/Body.css';
import PlayList from './PlayList';
import LeftBar from './LeftBar';
import BodyH from './BodyH';
import MusicPlayer from './MusicPlayer';
function Body() {
  return (
    <div className="App">
      <PlayList/>
      <LeftBar/>
      <BodyH/>
      <MusicPlayer/>
    </div>
  );
}

export default Body;
