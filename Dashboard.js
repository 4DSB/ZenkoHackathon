import React, { Component } from 'react';
// import rapid from 'rapid-io';
// var rapidClient = rapid.createClient(process.env.REACT_APP_RAPID_KEY);
// var transactions = rapidClient.collection('coinmo-transactions');
// var users = rapidClient.collection('coinmo-users');

import RaisedButton from 'material-ui/RaisedButton';
// import './App.css';

const coolStyle = {
	margin: 'auto',
	marginTop: '20px',
	width: '25%',
	textAlign: 'center',
	// display: 'inline-block',
	// backgroundColor: 'green',
}

const centerStyle = {
	width: 'auto',
  // textAlign: 'left',
  // borderStyle: 'solid',
}

const buttonStyle = {
  margin: 12,
}

class Dashboard extends Component {
	constructor(props){
		super(props);
		this.state={
			username: 'Cool Kid',
			balance: 985,
			total: 1000,
			transactions: null
		}
		// this.getTransactions();
	}

	// getTest = () => {
	// 	return ('Hey');
	// }

	// getTransactions = () => {
	// 	let user = this.state.username;
	// 	rapidClient
	// 	.collection(transactions.id)
	// 	.fetch(tran => {
	// 		// TODO: process to-dos
	// 		console.log(tran[0].body.toUser);
	// 		this.setState({transactions:tran[0].body});
	//	});
	// }

	render() {

		return (
			<div style={coolStyle}>
				<div style={centerStyle}>
					<div />Hello, {this.state.username}.
					<div />Your current storage is {this.state.balance} TB.
					<div />Your total storage is {this.state.total} TB.
					<br />
	   				<RaisedButton label="Add Storage" primary={true} style={buttonStyle} 
	   				onClick={() => this.setState({total: total + 1})}
	   				/>
   				</div>
			</div>
		)
	}
}

export default Dashboard;
