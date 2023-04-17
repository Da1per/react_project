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
    }, 1000);
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
    <div className="component">
      <h2>Playing Now</h2>
      <img className="musicCover" src="" />
      <div>
        <h3 className="title">Drum&boost</h3>
        <p className="subTitle">orex47</p>
      </div>
      <div>
        <div className="time">
          <p>
            {currTime.min}:{currTime.sec}
          </p>
          <p>
            {time.min}:{time.sec}
          </p>
        </div>

      </div>
    </div>
  );
}

  export default MusicPlayer;