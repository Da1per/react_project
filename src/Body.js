import './css/Body.css';
import LeftBar from './LeftBar';
import BodyH from './BodyH';
import React from 'react';
import Generes from './Generes'
import New_artist from './New_artist'
import Top_tracks from './Top_tracks'
import New_tracks from './New_tracks'
import Podcast from './Podcast'
import MusicPlayer from './MusicPlayer';
class Body extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stat:'BodyH'
    }
    this.activeTabs = this.activeTabs.bind(this);
    this.activeTabs1 = this.activeTabs1.bind(this);
    this.activeTabs2 = this.activeTabs2.bind(this);
    this.activeTabs3 = this.activeTabs3.bind(this);
    this.activeTabs4 = this.activeTabs4.bind(this);
    this.activeTabs5 = this.activeTabs5.bind(this);
  }  
  activeTabs(){
    this.setState(prevState => {
      return {
        stat:'Generes'
      }
    })
  }
  activeTabs1(){
    this.setState(prevState => {
      return {
        stat:'New_artist'
      }
    })
  }
  activeTabs2(){
    this.setState(prevState => {
      return {
        stat:'Top_tracks'
      }
    })
  }
  activeTabs3(){
    this.setState(prevState => {
      return {
        stat:'New_tracks'
      }
    })
    }  
  activeTabs4(){
    this.setState(prevState => {
      return {
        stat:'Podcast'
      }
    })
  }
  activeTabs5(){
    this.setState(prevState => {
      return {
        stat:'BodyH'
      }
    })
  }
  render(){
    return (
      <div className="main_body">
        <LeftBar b1={this.activeTabs}b2={this.activeTabs1}b3={this.activeTabs2}b4={this.activeTabs3}b5={this.activeTabs4}b6={this.activeTabs5}/>
        {(this.state.stat=='BodyH')?<BodyH/>:null}
        {(this.state.stat=='Generes')?<Generes/>:null}
        {(this.state.stat=='New_artist')?<New_artist/>:null}
        {(this.state.stat=='Top_tracks')?<Top_tracks/>:null}
        {(this.state.stat=='Podcast')?<Podcast/>:null}
        {(this.state.stat=='New_tracks')?<New_tracks/>:null}
        <MusicPlayer/>
      </div>
    );
}
}

export default Body;
