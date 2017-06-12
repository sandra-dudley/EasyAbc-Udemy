import React, { Component } from 'react';
import data from './alphabets.json';
import classnames from 'classnames';

class EasyAbc extends Component {
  constructor(props) {
      super(props);

      let letterArray = data.map((value, index)=> value.letter);
      let imageArray = data.map((value, index)=> value.image);
      let wordArray = data.map((value, index)=> value.word);
      let letterSoundArray = data.map((value, index)=> value.letterSound);
      let wordSound = data.map((value, index)=> value.wordSound);
    
      this.state = {
        letterArray: letterArray,
        imageArray: imageArray,
        wordArray: wordArray,
        letterSoundArray: letterSoundArray,
        wordSound: wordSound,
        index:0,
        displayImage: false,
        displayWord: false,
        random: false,
        playSound: true,
      }
      this.nextLetter = this.nextLetter.bind(this);
      this.previousLetter = this.previousLetter.bind(this);
      this.playLetter = this.playLetter.bind(this);
      this.playWord = this.playWord.bind(this);
      this.randomNumber = this.randomNumber.bind(this);
      this.playRandom = this.playRandom.bind(this);
      this.stopSound = this.stopSound.bind(this);
      this.repeatSound = this.repeatSound.bind(this);
  }
  componentDidMount() {
    this.playLetter()
  }
  componentDidUpdate (prevProps, prevState) {
    if (prevState.random === this.state.random && prevState.playSound === this.state.playSound){
      (this.state.displayImage) ? this.playWord(): this.playLetter();
    }
  }
  repeatSound() {
    let sound;
    sound = (this.state.displayImage) ? document.getElementById('wordSound') : sound= document.getElementById('letterSound');
    
    sound.pause();
    sound.currentTime = 0;
    sound.play();
  }
  nextLetter() {
    if (!this.state.displayImage) {
      this.setState({displayImage: true});
    } else if (this.state.displayImage && !this.state.displayWord) {
      this.setState({displayWord: true});
    } else {
      let nextNumber = (this.state.random)? this.randomNumber() : ((this.state.index<25)? this.state.index +1: 0);
      this.setState({index: nextNumber,displayImage: false,displayWord: false});
    }
    
  }
  previousLetter() {
    if (!this.state.random){
      let previousNumber = (this.state.index>0)? this.state.index -1: 25;
      this.setState({index: previousNumber,displayImage: false,displayWord: false});
    }
  }
  playLetter (){
    let sound= document.getElementById('letterSound');
    sound.pause();
    if (this.state.playSound) {
      sound.currentTime = 0;
      sound.play();
    }
  }
  playWord (){
    let sound = document.getElementById('wordSound');
    sound.pause();
    if (this.state.playSound) {
      sound.currentTime = 0;
      sound.play();
    }
  }
  randomNumber() {
    let randNum = Math.floor(Math.random() * 25);
    while (randNum === this.state.index) {
      randNum = Math.floor(Math.random() * 25);
    }
    return randNum;
  }
  playRandom (){
    this.setState({random: !this.state.random})
  }
  stopSound (){
    this.setState({playSound: !this.state.playSound})
  }
 
  render (){
   return(
     <div className="game">
      <span className="random-label" onClick={this.playRandom}>Random Letters </span>
      <div className="switch">
        <label>
          <input type="checkbox" name="random" onClick={this.playRandom} checked={(this.state.random) ? "checked" : ""}/>
          <span className="slider round"></span>
        </label>
      </div>
      <span className="random-label" onClick={this.stopSound}>Sound </span>
      <div className="switch">
        <label>
          <input type="checkbox" name="sound" onClick={this.stopSound} checked={(this.state.playSound) ? "checked" : ""} />
          <span className="slider round"></span>
        </label>
      </div>
      <div className="fields">
        <div className="field-block">{this.state.letterArray[this.state.index]}</div>
      </div>
      <div className = "buttons">
        <div className={classnames("button prev", {"default": this.state.random})} onClick = {this.previousLetter} >Previous</div>
        <div className="button" onClick={this.repeatSound}>Play sound again</div>
        <div className="button next" onClick = {this.nextLetter} >Next</div>
      </div>
      <div className="fields">
        <div className="field-block">
          <span className={classnames("left-field placeholder-span",{'hide': this.state.displayImage})} >Click next for image</span>
          <span className={classnames("left-field animated zoomIn", {'hide': !this.state.displayImage})}><img src={this.state.imageArray[this.state.index]} height='200' alt="{this.state.wordArray[this.state.index]}"/></span>
          <span className={classnames("right-field placeholder-span",{'hide': this.state.displayImage && this.state.displayWord})}>Click next for spelling</span>
          <span className={classnames("right-field  animated zoomIn",{'hide': !this.state.displayWord})}>{this.state.wordArray[this.state.index]}</span>
        </div>
      </div>
     <audio id="letterSound" src={this.state.letterSoundArray[this.state.index]} ></audio>
     <audio id="wordSound" src={this.state.wordSound[this.state.index]} ></audio>
     </div>
     
   );
 } 
}

export default EasyAbc;