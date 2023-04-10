import './css/Header.css';
import lupa from './images/lupa.svg';
function Header() {
  return (
    <div className="header">
      <div className='UpPanel'>
        <div className='ButtonAutorization'>
          
          <a className='Singup' href="Sing_up">Sing up</a>
          
          <button className='Log_in_botton'>
            <p className='LogIn'>LogIn</p>
          </button>
        </div>
        <div className='SearchString'>
          <button className='Lupa_button'>
            <img className='Lupa' src={lupa} alt="Search logo" />
          </button>
        </div>
      </div>
    </div>
    
  );
}

export default Header;