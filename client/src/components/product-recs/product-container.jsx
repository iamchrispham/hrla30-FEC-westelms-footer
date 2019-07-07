import React from 'react';
import { render } from 'react-dom';
import Carousel from './carousel.jsx';
import SectionHeader from './section-header.jsx';

// ProductContainer both parent of section-header and carousel 
  const ProductContainer = (props) => (
      <div className="productContainer" id="productContainer">
        This is a product container div
        <SectionHeader />
        <Carousel />
      </div>
    )


export default ProductContainer;