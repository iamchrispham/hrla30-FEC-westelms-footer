import React from 'react';
import FooterLinks from './footerlink.jsx';


class FooterLinkList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      links: [ // mock data (maybe)
        { // col 1
          column_id: 1,
          category: `We're Here to Help`,
          sublinks: [
            {
              name: '',
              url: ''
            }
          ]
        },
        { 
          column_id: 1,
          category: `About Us`,
          sublinks: [
            {
              name: '',
              url: ''
            }
          ]
        },
        { 
          column_id: 2,
          category: `Our Cards + Rewards`,
          sublinks: [
            {
              name: '',
              url: ''
            }
          ]
        }, // col 2
        { 
          column_id: 2,
          category: `Catalog`,
          sublinks: [
            {
              name: '',
              url: ''
            }
          ]
        },
        { 
          column_id: 2,
          category: `BTB Programs`,
          sublinks: [
            {
              name: '',
              url: ''
            }
          ]
        }, // col 3
        { 
          column_id: 3,
          category: `Your Local Store`,
          sublinks: [
            {
              name: '',
              url: ''
            }
          ]
        },
        { 
          column_id: 3,
          category: `Stores`,
          sublinks: [
            {
              name: '',
              url: ''
            }
          ]
        }
      ]
    }
    this.mapLinks = this.mapLinks.bind(this);
    this.testRender = this.testRender.bind(this);
  }

  mapLinks () {
    console.log('mapLinks invoked.', Array.isArray(this.state.links));
    if (Array.isArray(this.state.links)) {
     return this.state.links.map((category, key) => {
        return (
          <div className={`footer-column-${category['column_id']}`}>
            {console.log(category['column_id'])}
            {console.log(typeof category['category'])}
            ** {category['category']} **
            {/* <FooterLinks sublinks={} /> */}
          </div>
        )
      })
    }
  }

  testRender () {
    return (
      <div>
        ***react test render***
      </div>
    )
  }

  render() {
    return (
      <div className="footer-link-list" id="footer-link-list">
        -----Footer Links Begin-----
        {
          this.state.links ? this.mapLinks() : null // consider how to render links dynamically
          
          
        }<br></br>
        -----Footer Links End-----
      </div>
    )
  }
}

export default FooterLinkList;