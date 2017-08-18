import React, { Component } from 'react';
import ReactDOM, { render } from 'react-dom';

const styles = {
	nav: {
    	display: 'inline',
    	margin: 0,
    	padding: 0,
    	overflow: 'hidden',
    	color: '#fff',
      	backgroundColor: '#ddd',
	},
	list: {
		float: 'left',
		fontSize: 20,
		color: 'white',
	}
}

class NavBar extends Component {
	render () {

	    return (
	    	<div style={styles.nav}>
	    		<div style={styles.list}>text</div>
    		</div>
	    )

	}
}

class fileUpload extends Component {
	render() {
		return (
			<div>
				<form action="/upload"
				method="post"
				enctype="multipart/form-data">
				<input type="file"
				name="file"
				value="val">
				<input type="submit"
				value="get size">
			</div>
		)
	}
}

export default NavBar;
