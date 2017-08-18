import React, { Component } from 'react';
// import rapid from 'rapid-io';
// var rapidClient = rapid.newClient(process.env.RAPID_KEY);
// var transactions = rapid.collection('coinmo-transactions');
// var users = rapid.collection('coinmo-users');

import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

// import './App.css';


const sectionStyle = {
	margin: '0px 10px 0px 10px',
};
const noticeStyle = {
	margin: '15px 5px 0px 5px',
};

class Send extends Component {
	constructor(props){
		super(props);
		this.state={
			to:'',
			amount:'',
		}
	}

	handleClick = () => {
		let toUser = 'person1';
		let fromUser = 'person2';
		let transactionId = '1234567';
		let transaction = {
			to: {toUser},
			from: {fromUser},
			transactionId: {transactionId}
		}
	}

	render() {
		return (
			<div>
				<div style={sectionStyle}>
				<div style={noticeStyle}>Sending funds</div>
				<TextField
					hintText="username, email or public address"
					floatingLabelText="Who are you sending to?"
					onChange={(event,newValue) => this.setState({username:newValue})}
				/>
				<div/>
				<TextField
					hintText="amount"
					floatingLabelText="How much?"
					onChange={(event,newValue) => this.setState({amount:newValue})}
				/>
				<br/>
				<RaisedButton label="Send" primary={true} style={noticeStyle}
					onClick={(event) => this.handleClick(event)}/>
				</div>
			</div>
		);
	}
}

export default Send;
