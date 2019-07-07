import React from 'react';
// import { render } from 'react-dom';
import ProductContainer from './components/product-recs/product-container.jsx';
import Footer from './components/footer/index.jsx';

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
    <div id="components-cp">
      -- Top --
      <ProductContainer />
      <Footer />
    </div>
    )
  }
}


export default App;