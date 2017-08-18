import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import MenuItem from 'material-ui/MenuItem';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import RaisedButton from 'material-ui/RaisedButton';
import IconButton from 'material-ui/IconButton';

import ProfileIcon from 'react-material-icons/icons/action/account-circle';
import RegisterIcon from 'react-material-icons/icons/content/create';
import LoginIcon from 'react-material-icons/icons/communication/vpn-key';
import DashboardIcon from 'react-material-icons/icons/action/dashboard';
import SettingsIcon from 'react-material-icons/icons/action/settings';
import UploadIcon from 'react-material-icons/icons/file/file-upload';
import MenuIcon from 'react-material-icons/icons/navigation/menu';

// import ZenkoLogo from './zenkologo.png'

const zenkoLogoStyle = {
	margin: 'auto',
};

class AppNav extends Component {
	constructor(props){
		super(props);
		this.state = {open: false};
	}

	handleToggle = () => this.setState({open: !this.state.open});

	render() {
		return(
			<div>
				<Drawer
					docked={false}
					open={this.state.open}
					onRequestChange={(open) => this.setState({open})}>
						<MenuItem
							primaryText='Login'
							leftIcon={<LoginIcon/>}
							containerElement={<Link to='/login'/>}
							onClick={this.handleToggle}
						>
						</MenuItem>
						<MenuItem
							primaryText='Register'
							leftIcon={<RegisterIcon/>}
							containerElement={<Link to='/register'/>}
							onClick={this.handleToggle}
						/>
						<MenuItem
							primaryText='Dashboard'
							leftIcon={<DashboardIcon/>}
							containerElement={<Link to='/dashboard'/>}
							onClick={this.handleToggle}
						/>
						<MenuItem
							primaryText='Settings'
							leftIcon={<SettingsIcon/>}
							containerElement={<Link to='/settings'/>}
							onClick={this.handleToggle}
						/>
						<MenuItem
							primaryText='Upload'
							leftIcon={<UploadIcon/>}
							containerElement={<Link to='/fileupload'/>}
							onClick={this.handleToggle}
						/>
				</Drawer>
				<AppBar
					title="Zenko Majic"
					iconElementLeft={
						<IconButton
							onClick={this.handleToggle}
							tooltip="Show drawer">
							<MenuIcon />
						</IconButton>
					}>
				</AppBar>
			</div>
		);
	}
}

export default AppNav;


					// <img src={ZenkoLogo} className="zenko-logo" alt="zenko_logo" style={zenkoLogoStyle} />
