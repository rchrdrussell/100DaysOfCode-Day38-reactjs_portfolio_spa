/*This component is the sidebar and will hold a set of "NavItems"
 * components (Home, About, Education, Skills, Contact). It's just the
 * whole navigation bar box*/

import React, { Component } from 'react';
import Navitem from './Navitem';  //Navitem is the sub-component, while Navbar is the parent component

class Navbar extends Component {
	constructor(props){
		super(props);
		this.state = {
			'NavItemActive': ''
		}
	}

	activeitem = (x) => {
		if(this.state.NavItemId.length > 0){
			document.getElementById(this.state.NavItemActive).classList.remove('active');
		}

		this.setState({'NavItemActive': x}, () => {
			document.getElementById(this.state.NavItemActive).classList.add('active');
		});
	};
	render() {
		return(
			<nav>
			  <ul>
			    <Navitem item="Home" tolink="/" activec={this.activeitem}></Navitem>
			    <Navitem item="About" tolink="/about" activec={this.activeitem}></Navitem>
			    <Navitem item="Education" tolink="/education" activec={this.activeitem}></Navitem>
			    <Navitem item="Skills" tolink="/skills" activec={this.activeitem}></Navitem>
			    <Navitem item="Contact" tolink="/contact" activec={this.activeitem}></Navitem>
			  </ul>
			</nav>
		)
	}
}

export default Navbar;
