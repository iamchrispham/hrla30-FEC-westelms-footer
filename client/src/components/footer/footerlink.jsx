import React from 'react';

const FooterLinks = (props) => {
  console.log('FooterLinks(props):', props);
  if (props.sublinks.length === 0) { // if we've reached the furthest right of the footer
    return (
      <div>
        <div>
          <div>
            {/* 
            Implement signup component here
            We can hella nest divs!
            */}
          </div>
        </div>
      </div>
    )
  }
  return (
    <ul className={`hover-it`}>
      {
        props.sublinks.map((link, i) => {
          var { name, url } = link;
          if (!Array.isArray(name)) { // if nested 'name' is not an array (address)
            return (
              <li className="footer-link">
                <a href={url}>{name}</a>
              </li>
            )
          } else { // is an array (address)
            return name.map((line, i) =>
              <li className="footer-address">{line}</li>
            )
          }
        })
      }
    </ul>
  )
}

export default FooterLinks;