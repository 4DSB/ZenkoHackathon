import React, { Component } from 'react';
// import Header from './Header'
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
// import './App.css';

const sectionStyle = {
	margin: 'auto',
	marginTop: '20px',
	width: '25%',
	textAlign: 'center',
	// margin: '0px 10px 0px 10px',
};

const noticeStyle = {
	// margin: '15px 5px 0px 5px',
};


class Settings extends Component {
	constructor(props){
		super(props);
		this.state={
			value:1, // fix this to be rapid.io current
		}
	}
	handleChange = (event, index, value) => this.setState({value});
	render() {
		return (
			<div>
				<div style={sectionStyle}>
					<div style={noticeStyle}>Settings</div>
				<div>
					<SelectField style={"text-align: left"}
						floatingLabelText="Frequency"
						value={this.state.value}
						onChange={this.handleChange}
					>
						<MenuItem value={1} primaryText="Public" />
					    <MenuItem value={2} primaryText="Friends Only" />
						<MenuItem value={3} primaryText="Just me" />
						<MenuItem value={4} primaryText="Nobody" />
					</SelectField>
				</div>
				</div>
				<br/>
			</div>
		);
	}
}

export default Settings;
