import './css/LeftBar.css';
import logo_site from'./images/logo.svg';
import React from 'react';
const LeftBar =({b1,b2,b3,b4,b5,b6})=> {
    return (
      <div className="left_bar">
        <a className='logo' href='#' onClick={b6} >
          <img className='logo_img' src={logo_site} alt='logo'></img>
          <p className='logo_name'>desert sound</p>
        </a>
        <ul>
          <li><button onClick={b1} className='link' href='#'>GENRES</button></li>
          <li><button onClick={b2} className='link' href='#'>NEW TRACKS</button></li>
          <li><button onClick={b3} className='link' href='#'>TOP TRACKS</button></li>
          <li><button onClick={b4} className='link' href='#'>TOP ARTIST</button></li>
          <li><button onClick={b5} className='link ' href='#'>PODCAST</button></li>
        </ul>
      </div>
    );
}

  
  export default LeftBar;