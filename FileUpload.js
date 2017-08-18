import React, { Component } from 'react'
import RaisedButton from 'material-ui/RaisedButton'

import express from 'express'
import multer from './multer'
const router = express.Router();

// import axios from 'axios'


const styles = {

	label: {
		color: "rgba(0, 0, 0, 0.87)",
		transition: "all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms",
		boxShadow: "0px 1px 6px rgba(0, 0, 0, 0.12), 0px 1px 4px rgba(0, 0, 0, 0.12)",
		borderRadius: "2px",
		minWidth: "88px",

		border: "10px none",
		boxSizing: "border-box",
		display: "inline-block",
		fontFamily: "Roboto,sans-serif",
		cursor: "pointer",
		textDecoration: "none",
		margin: 12,
		padding: 0,
		outline: "medium none",
		fontSize: "inherit",
		fontWeight: "inherit",
		position: "relative",
		zIndex: 1,
		height: "36px",
		lineHeight: "36px",
		width: "100%",
		borderRadius: "2px",
		transition: "all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms",
		backgroundColor: "rgb(0, 188, 212)",
		textAlign: "center",

		height: "36px",
		width: 150,
		borderRadius: "2px",
		transition: "all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms",
		top: "0px",
	},
	text: {
		position: "relative",
		opacity: 1,
		fontSize: "14px",
		letterSpacing: "0px",
		textTransform: "uppercase",
		fontWeight: 500,
		margin: "0px",
		paddingLeft: "16px",
		paddingRight: "16px",
		color: "rgb(255, 255, 255)",
		// -moz-user-select: none;"
	},
	input: {
		opacity: 0,
		position: "absolute",
		zIndex: -1,
		display: "hidden",	
	},
	button: {
 		margin: 12,
	}
}

router.post('/upload', multer.upload.single('file'), (req, res) => {
  if (req.file) {
    res.status(200).json({
      size: req.file.size
    });
  } else {
    res.status(500).json({
      error: 'No file uploaded.'
    });
  }
})

class FileUpload extends Component {

	  handleUploadFile = (event) => {
	    const data = new FormData();
	    data.append('file', event.target.files[0]);
	    data.append('name', 'some value user types');
	    data.append('description', 'some value user types');
	    // '/files' is your node.js route that triggers our middleware
	    axios.post('/files', data).then((response) => {
	      console.log(response); // do something with the response
	},

	render() {
		return (
			<div>
				{/*<form action="/upload" method="post" enctype="multipart/form-data">*/}

					<input style={styles.input} type="file" name="file" value="val" id="upload-file"/>

					<input style={styles.input} type="submit" value='val' id="submit-file"
					onchange={this.handleUploadFile} />

					<RaisedButton label="Browse..." primary={true} style={styles.button}
					onClick={(event) => document.getElementById('upload-file').click()} />

					<RaisedButton label="Upload" primary={true} style={styles.button}
					onClick={(event) => document.getElementById('submit-file').click()} />

				{/*</form>*/}
			</div>
		)
	}
}
export default FileUpload


// class uploadMyFile extends Component {
//   handleUploadFile = (event) => {
//     const data = new FormData();
//     data.append('file', event.target.files[0]);
//     data.append('name', 'some value user types');
//     data.append('description', 'some value user types');
//     // '/files' is your node.js route that triggers our middleware
//     axios.post('/files', data).then((response) => {
//       console.log(response); // do something with the response
//     });
    
//     render() {
//       <div>
//         <input type="file" onChange={this.handleUploadFile} />
//       </div>
//     }
// }

// export default uploadMyFile;

