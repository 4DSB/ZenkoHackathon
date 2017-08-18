// import React, { Component } from 'react'
// import ReactDOM, { render } from 'react-dom'
// import { BrowserRouter as Router, Route } from 'react-router-dom'

// import Window from './window'
// import NavBar from './navbar'

// import AppNav from './AppNav'

// Router.location = '/';

// const nav = document.querySelector('#nav')
// const app = document.querySelector('#app')

// render(<AppNav />, nav)
// render(<Window />, app)

import React, { Component } from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import AppNav from './AppNav'
import Home from './Home'
import Login from './Login'
import Register from './Register'
import Dashboard from './Dashboard'
import Settings from './Settings'
import FileUpload from './FileUpload'

import getMuiTheme from 'material-ui/styles/getMuiTheme'
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

// import './App.css';

var injectTapEventPlugin = require("react-tap-event-plugin")
injectTapEventPlugin()

Router.location = '/home'
render(
    <Router>
        <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
            <div>
                <AppNav />
                <Route path="/home" component={Home}/>
                <Route path="/login" component={Login}/>
                <Route path="/register" component={Register}/>
                <Route path="/dashboard" component={Dashboard}/>
                <Route path="/settings" component={Settings}/>
                <Route path="/fileupload" component={FileUpload}/>
            </div>
        </MuiThemeProvider>
    </Router>,
    document.getElementById('app')
)
