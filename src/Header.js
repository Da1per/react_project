import './css/Header.css';
function Header() {
  return (
    <div className="App">
      <div className='UpPanel'>
        <div className='ButtonAutorization'>
          <button>
            <p className = "SingUp">Sing up</p>
          </button>
          <button>
            <p className='LogIn'>LogIn</p>
          </button>
        </div>
        <div className='SearchString'>
          <img src="images/logo.jpg" alt="BigCo Inc. logo"/>
          
        </div>
      </div>
    </div>
    
  );
}

export default Header;