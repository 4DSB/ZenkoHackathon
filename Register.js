import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
// import './App.css';

const sectionStyle = {
	margin: 'auto',
	marginTop: '20px',
	width: '25%',
	textAlign: 'center',
	// margin: '0px 10px 0px 10px',
	// marginLeft: '50%',
};

const noticeStyle = {
	// margin: '15px 5px 0px 5px',
	// marginLeft: '50%',
};

const buttonStyle = {
  margin: 12,
}

class Register extends Component {
	constructor(props){
		super(props);
		this.state={
			username:'',
			password:'',
			passReveal:false
		}
	}
	render() {
		return (
			<div>
				<div style={sectionStyle}>
				<div style={noticeStyle}>Register an account</div>
				<TextField
					hintText="Enter Your Username"
					floatingLabelText="Username"
					onChange={(event,newValue) => this.setState({username:newValue})}
				/>
				<div/>
				<TextField
					hintText="Enter a Password"
					floatingLabelText="Enter Password"
					type="password"
					onChange={(event,newValue) => this.setState({password:newValue})}
				/>
				<br/>
				<TextField
					hintText="Confirm Password"
					floatingLabelText="Repeat Password"
					type="password"
					onChange={(event,newValue) => this.setState({confirmpass:newValue})}
				/>
				<br/>
				<RaisedButton label="Submit" primary={true} style={buttonStyle}
					onClick={(event) => this.handleClick(event)} />
				</div>
			</div>
		);
	}
}

export default Register;
