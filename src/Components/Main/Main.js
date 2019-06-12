import React, { Component } from 'react';
import Carousel from './Carousel'

export default class Main extends Component {
	constructor(props) {
		super(props)
		this.state = {}
	}

	render() {
		return (
			<div>
				<h1>Main</h1>
				<p>Carousel</p>
				<p>Intro</p>
				<p>Calendar</p>
				<p>Blog</p>
				<p>Contact</p>
				<p>Testimonials</p>
			</div>
		);
	}
}