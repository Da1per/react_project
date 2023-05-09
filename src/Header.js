import './css/Header.sass';
import lupa from './images/lupa.svg'
import AuthMod from './AuthMod';
import RegMod from './RegMod';
import React from 'react';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        popUpAc: false,
        regForm: false
    }
    this.popUpActive = this.popUpActive.bind(this);
    this.popUpActive1 = this.popUpActive1.bind(this);
    this.regFormAc = this.regFormAc.bind(this);
    this.regFormAc1 = this.regFormAc1.bind(this);
  }  

  regFormAc(){
    this.setState(prevState => {
      return {
        regForm: true
      }
    })
  }
  regFormAc1(){
    this.setState(prevState => {
      return {
        regForm: false
      }
    })
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
        <AuthMod active={this.state.popUpAc}   but={this.popUpActive1}/>
        <RegMod active1={this.state.regForm}   but1={this.regFormAc1}/>
        <div className='UpPanel'>
          <div className='ButtonAutorization'>
            <button className='Singup' href="Sing_up" onClick={this.regFormAc}>Sing up</button>
            <button className='Log_in_botton' onClick={this.popUpActive}>LogIn</button>
          </div>
            <button className='Lupa_button' onClick={()=>{}}>
              <img className='Lupa' src={lupa} alt="Search logo" />
            </button>
        </div>
      </div>
    );
  }
  
}
export default Header;