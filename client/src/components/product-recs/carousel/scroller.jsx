import React from 'react';
import Swiper from 'react-id-swiper';

const SimpleSwiperWithParams = (props) => {
  const params = {
    initialSlide: 0,
    direction: 'horizontal',
    speed: 300,
    nested: false,
    spaceBetween: 20,
    slidesPerView: 5,
    noSwiping: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    }
  }

  return (
    <Swiper {...params}>
      {
        props.images.map((image, key) => (
          <img src={image['url']} style={{ width: 225+ 'px', height: 247+ 'px' }} handleClick={props.handleClick} />
        ))
      }
    </Swiper>
  )
}

const Scroller = (props) => {
  { console.log('Scroller props:', props) }
  return (
    <div>
      {
        props.images ? SimpleSwiperWithParams(props) : null
      }
    </div>
  )

  // return (
  //   <Swiper>
  //     swiiiiper
  //   </Swiper>
  // )
}

export default Scroller;