import './css/LeftBar.css';
import logo_site from'./images/logo.svg';
function LeftBar() {
    return (
      <div className="left_bar">
        <a className='logo' href='#'>
          <img className='logo_img' src={logo_site} alt='logo'></img>
          <p className='logo_name'>desert sound</p>
        </a>
        <ul>
          <li><a className='link' href='#'>GENRES</a></li>
          <li><a className='link' href='#'>GENRES</a></li>
          <li><a className='link' href='#'>TOP TRACKS</a></li>
          <li><a className='link' href='#'>TOP ARTIST</a></li>
          <li><a className='link' href='#'>PODCAST</a></li>
        </ul>
      </div>
    );
  }
  
  export default LeftBar;