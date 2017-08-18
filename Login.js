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
};
const noticeStyle = {
	margin: '15px 5px 0px 5px',
};

class Login extends Component {
	constructor(props){
		super(props);
		this.state={
			username:'',
			password:''
		}
	}

	handleClick(event){
		console.log(event);
	}

	render() {
		return (
			<div>
				<div style={sectionStyle}>
				<div style={noticeStyle}>Login to continue</div>
				<TextField
					hintText="Enter Your Username"
					floatingLabelText="Username"
					onChange={(event,newValue) => this.setState({username:newValue})}
				/>
				<div/>
				<TextField
					hintText="Enter Your Password"
					floatingLabelText="Password"
					type="password"
					onChange={(event,newValue) => this.setState({password:newValue})}
				/>
				<br/>
				<RaisedButton label="Submit" primary={true} style={noticeStyle}
					onClick={(event) => this.handleClick(event)}/>
				</div>
			</div>
		);
	}
}

export default Login;
