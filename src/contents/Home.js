/*Holds the home page of the SPA*/

import React, { Component } from 'react';
import profilepicture from '../img/profilepicture.jpg';
import ReactTypingEffect from 'react-typing-effect';


class Home extends Component {
	render(){
		return(
			<div className="condiv home">
			<img src={profilepicture} className="profilepicture"></img>
			<ReactTypingEffect className="typingeffect" text={['My name is Russell', 'I am a Web Developer']} speed={100} eraseDelay={700}/>
			</div>
		)
	}
}

export default Home;
