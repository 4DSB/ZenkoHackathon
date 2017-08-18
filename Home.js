import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import RaisedButton from 'material-ui/RaisedButton';
// import './App.css';

class Home extends Component {
	constructor(props){
		super(props);
	}
	render() {
		return (
			<div>
				<div style={{margin: '40px 0px 0px 0px', display: 'flex', justifyContent: 'center'}}>
					Your dashboard for managing your storage.
				</div>
				<div style={{margin: '40px 0px 0px 0px', display: 'flex', justifyContent: 'center'}}>
					<RaisedButton label='Get Started' primary={true} containerElement={<Link to='/register'/>}/>
				</div>
				<div style={{margin: '10px 0px 10px 0px', display: 'flex', justifyContent: 'center'}}>or</div>
				<div style={{margin: '10px 0px 10px 0px', display: 'flex', justifyContent: 'center'}}>
					<RaisedButton label='Login' primary={true} containerElement={<Link to='/login'/>}/>
				</div>

			</div>
		);
	}
}

export default Home;
