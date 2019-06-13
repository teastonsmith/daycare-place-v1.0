import React from 'react';
// import { Link } from 'react-router-dom'
// import { connect } from 'react-redux'

import Navbar from './Navbar';

export default function Header() {
	return (
		<div>
			<h1>Header</h1>
			<div>Logo</div>
			<div>Social Media</div>
			<Navbar />
		</div>
	);
}
