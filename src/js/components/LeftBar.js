import '../../css/LeftBar.sass';
import logo_site from'../../images/logo.svg';
import React from 'react';
const LeftBar =({setActive})=> {
  const active1=()=>{
    setActive('BodyH')
  }
  const active2=()=>{
    setActive('Generes')
  }
  const active3=()=>{
    setActive('New_artist')
  }
  const active4=()=>{
    setActive('Top_tracks')
  }
  const active5=()=>{
    setActive('Podcast')
  }
  const active6=()=>{
    setActive('New_tracks')
  }
    return (
      <div className="left_bar">
        <a className='logo' href='#' onClick={active1} >
          <img className='logo_img' src={logo_site} alt='logo'></img>
          <p className='logo_name'>desert sound</p>
        </a>
        <ul className='left_bar_links'>
          <li><button onClick={active2} className='link' href='#'>GENRES</button></li>
          <li><button onClick={active6} className='link' href='#'>NEW TRACKS</button></li>
          <li><button onClick={active4} className='link' href='#'>TOP TRACKS</button></li>
          <li><button onClick={active3} className='link' href='#'>TOP ARTIST</button></li>
          <li><button onClick={active5} className='link ' href='#'>PODCAST</button></li>
        </ul>
      </div>
    );
}
  export default LeftBar;