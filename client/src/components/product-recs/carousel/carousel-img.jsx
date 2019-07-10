import React from 'react';

// props: url, name, handleClick, key

const CarouselImg = (props) => {
  console.log('CarouselImg(props):', props);
  return (
    <div className={`scroller-id ${image['id']}`}>
      <img src={props.url} alt={props.name} onClick={props.handleClick} />
    </div>
  )
}
export default CarouselImg;