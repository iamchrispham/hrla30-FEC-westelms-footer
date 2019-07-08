import React from 'react';
import axios from 'axios';

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
    this.getAllImagesAPI = this.getAllImagesAPI.bind(this);
    this.renderImages = this.renderImages.bind(this);
  }

  componentDidMount() {
    console.log('Carousel component mounting...');
    this.getAllImagesAPI();
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
// style="width:225px;height:247px"/
  renderImages() {
    return (
      <ul className="panel" style={{ width: 960 + 'px'}}>
        {
          this.state.images.map((image, i) => {
            console.log(`ImgData(${i}): ${image['url']}`)
            return (
              <li className={`scroller-id ${image['id']}`}>
              <img src={image['url']} alt={image['name']} width="225px" height="247px"/>
              </li>
            )
          })
        }
      </ul>
    )
  }

  render() {
    return (
      <div className="scroller-cp" id="scroller-cp">
        { this.state.images ? this.renderImages() : null}
    </div>

    )
  }
}


export default Carousel;