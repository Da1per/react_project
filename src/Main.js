import './css/Main.css';
import Header from './Header';
import LeftBar from './LeftBar';
import Body from './Body';
function Main() {
  return (
    <div className="App">
      <Header/>
      <LeftBar/>
      <Body/>
    </div>
  );
}

export default Main;
