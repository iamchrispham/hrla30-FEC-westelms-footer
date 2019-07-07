import React from 'react';
import { render } from 'react-dom';
import Subfooter from './subfooter.jsx';

class Footer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
		}
	}

	render() {
		return (
			<div id="footer-container">
				--- Footer Begin --- 
				<Subfooter />
				--- Footer End ---
			</div>
		)
	}
}

export default Footer;