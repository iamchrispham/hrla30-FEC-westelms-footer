import React from 'react';

const FooterLinks = (props) => {
  console.log('FooterLinks(props):', props);
  return (
    <div className={`linktest`}>
      {
        props.sublinks.map((link, i) => {
          var { name, url } = link;
          if (!Array.isArray(name)) {
            return (
              <div>
                <a href={url}>{name}</a>
              </div>
            )
          } else { // is an array (address)
            return name.map((line, i) =>
              <div>{line}</div>
            )
          }
        })
      }
    </div>
  )
}

export default FooterLinks;