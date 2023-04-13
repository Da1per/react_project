import './css/Header.css';
import lupa from './images/lupa.svg';
import React from 'react';
class Header extends React.Component {
  render(){
    return (
      <div className="header">
        <div className='UpPanel'>
          <div className='ButtonAutorization'>
            <a className='Singup' href="Sing_up">Sing up</a>
            <button className='Log_in_botton'>LogIn</button>
          </div>
            <button className='Lupa_button'>
              <img className='Lupa' src={lupa} alt="Search logo" />
            </button>
        </div>
      </div>
    );
  }
}
export default Header;