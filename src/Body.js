import './css/Body.css';
import LeftBar from './LeftBar';
import BodyH from './BodyH';
import PopUp from './PopUp';
import React from 'react';
class Body extends React.Component {
  render(){
  return (
    <div className="main_body">
      <LeftBar/>
      <BodyH/>
    </div>
  );
}}

export default Body;
