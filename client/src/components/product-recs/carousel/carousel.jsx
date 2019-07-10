import React from 'react';
import axios from 'axios';
import Scroller from './scroller.jsx';

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: []
    }
    this.getAllImagesAPI = this.getAllImagesAPI.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.renderScroller = this.renderScroller.bind(this);
  }

  componentDidMount() {
    console.log('Carousel component mounting...');
    this.getAllImagesAPI();
  }

  handleClick(e, data) {
    let selectedImg = e.target.src;
    let el = e.target;
    let imgs = document.getElementsByClassName('carousel-image-selected');
    if (!imgs.length !== 0) {
      imgs[0].className = 'carousel-image';
      el.className = 'carousel-image-selected';
    } else {
      el.className = 'carousel-image-selected';
    }
    console.log('clicked Image:', selectedImg);
  }

  getAllImagesAPI() {
    axios.get('/products-cp/')
      .then(({ data }) => { // can deconstruct object just for the data property
        // var { data } = resp;
        this.setState({
          images: data
        }, () => console.log('New Image Data', this.state.images))

      })
      .catch((err) => {
        console.log('Error grabbing images.', err);
      })
  }


  renderScroller() {
    return (
      <div className="scroller-container">
        <Scroller handleClick={this.handleClick} images={this.state.images} />
      </div>
    )
  }

  render() { // class component renderer
    return (
      <div className="carousel-container">
        {this.state.images ? this.renderScroller() : null}
      </div>
    )
  }
}


export default Carousel;
