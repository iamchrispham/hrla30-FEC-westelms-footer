import React from 'react';
// import { render } from 'react-dom';
import ProductContainer from './components/product-recs/product-container.jsx';
import FooterContainer from './components/footer/index.jsx';
import BoilerPlate from './components/boiler-plate/index.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      euphoria: ''
    }
  }
  // ProductContainer->SectionHeader->Carousel
  // Footer->FooterLinkList(4x)->FooterLink or Footer->FooterLinkList

  render() {
    return (
    <div className="components-cp" id="components-cp">
      -- Top --
      {/* <ProductContainer /> */}
      <BoilerPlate />
      <FooterContainer />
    </div>
    )
  }
}


export default App;