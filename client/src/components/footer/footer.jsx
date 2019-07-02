import React from 'react';
import { render } from 'react-dom';

class Footer extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            onHover: false
        }
    }

    render() {

        return(
            <div id="footer">
                Footer
            </div>
        )
    }
}

export default Footer;