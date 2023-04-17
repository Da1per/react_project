import './css/Header.css';
import lupa from './images/lupa.svg'
import PopUp from './PopUp';
import React from 'react';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.popUpState = React.createRef()
    this.state = {
        popUpAc: false
    }
    this.popUpActive = this.popUpActive.bind(this);
    this.popUpActive1 = this.popUpActive1.bind(this);
  }  
  popUpActive1(){
    
    this.setState(prevState => {
      return {
        popUpAc: false
      }
    })
  }

  popUpActive(){
    
    this.setState(prevState => {
      return {
        popUpAc: true
      }
    })
  }
  
  render(){
    return (
      <div className="header">
        <PopUp active={this.state.popUpAc}   but={this.popUpActive1}/>
        <div className='UpPanel'>
          <div className='ButtonAutorization'>
            <a className='Singup' href="Sing_up">Sing up</a>
            <button className='Log_in_botton' onClick={this.popUpActive}>LogIn</button>
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