import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

// import './App.css';

const sectionStyle = {
	margin: '0px 10px 0px 10px',
};
const noticeStyle = {
	margin: '15px 5px 0px 5px',
};

class Request extends Component {
	constructor(props){
		super(props);
		this.state={
			from:'',
			amount:''
		}

	}
	render() {
		return (
			<div>
				<div style={sectionStyle}>
				<div style={noticeStyle}>Requesting funds</div>
				<TextField
					hintText="username, email or public address"
					floatingLabelText="Who are you requesting from?"
					onChange={(event,newValue) => this.setState({from:newValue})}
				/>
				<div/>
				<TextField
					hintText="amount"
					floatingLabelText="How much?"
					onChange={(event,newValue) => this.setState({amount:newValue})}
				/>
				<br/>
				<RaisedButton label="Request" primary={true} style={noticeStyle}
					onClick={(event) => this.handleClick(event)}/>
				</div>
			</div>
		)
	}
}

export default Request;
