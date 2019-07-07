import React from 'react';
import FooterLinkList from './footerlinklist.jsx';

const Subfooter = (props) => {
  return (
    <div className="subfooter" id="subfooter">
      --- Subfooter Begin --- <br></br>
        <FooterLinkList />
      --- Subfooter End ---
    </div>
  )
}

export default Subfooter;