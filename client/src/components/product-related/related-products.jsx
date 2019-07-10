import React from 'react';

const RelatedProducts = (props) =>
  <div id={`br${props.key}`} className={`br-more-widget ${props.key}`} style={{ display: 'block' }}>
    {/* <a href={props.url}><img src={props.imgURL} /></a> */}
    <a href={props.url}>{props.name}</a>
    <p>{props.desc}</p>
  </div>

export default RelatedProducts;