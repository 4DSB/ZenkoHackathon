import React, { Component } from 'react'
import ReactDOM, { render } from 'react-dom'

const styles = {
  app: {
    paddingTop: 40,
    marginBottom: 40,
    fontSize: 26,
    fontFamily: 'roboto',
    textAlign: 'center',
  }
}

class Window extends Component {
  render() {
    const style = {
      margin: 20,
      marginLeft: 300,
      marginRight: 300,
      padding: 20,
      color: 'white',
      fontSize: 16,
      backgroundColor: this.props.color,
      borderRadius: 4, borderWidth: 2, borderColor: '#000000',
    }
    return (
      <div style={style}>
        {this.props.children}
      </div>
    )
  }
}

class App extends Component {
  render() {
    return (
      <div style={styles.app}>      
        Make Your Payment!
          <Window color={'rgb(210, 239, 250)'}>
            <span>Username: </span><input type="text" /><br/>
            <span>Password: </span><input type="text" /><br/>
            <input type="button" value="Submit"/>
          </Window>
      
      </div>
    )
  }
}

export default App