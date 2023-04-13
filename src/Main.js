import './css/Main.css';
import Header from './Header';
import Body from './Body';
import React from 'react';
class Main extends React.Component {
  render(){
  return (
    <div className="main">
      <Header/>
      <Body/>
    </div>
  );
}
}
export default Main;
