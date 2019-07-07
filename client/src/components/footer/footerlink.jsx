import React from 'react';

const FooterLinks = (props) => {
  // be sure to parse out the a href conditionally out of the store address
  return (
    <div className={`linktest`}>
      {
        props.sublinks.map((link, i) => {
          var { name, url } = link;
          return (
            <div>
              <a href={url}>{name}</a>
            </div>
          )
        })
      }
    </div>
  )
}

export default FooterLinks;