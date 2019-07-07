import React from 'react';

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      onHoverLeftArrow: false,
      onHoverRightArrow: false,
      onClickLeftArrow: false,
      onClickRightArrow: false,
      images: []
    }
  }

  render() {
    return (
      <div className="carousel-cp" id="carousel-cp">
        This is a carousel div.
    </div>

    )
  }
}


export default Carousel;