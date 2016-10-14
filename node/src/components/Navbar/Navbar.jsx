import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { Link } from 'react-router';


class MyNavbar extends React.Component {
  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  mapLink(link) {


    let href = link.get('href');

    if(href.substring(0, 4) === "http") {

      return (
        <li key={link.get('key')}>
          <a href={link.get('href')} className={link.get('class')} id={link.get('id')}>
            { link.get('title') }
          </a>
        </li>
      );


    } else {

      return (
        <li key={link.get('key')}>
          <Link to={link.get('href')} className={link.get('class')} id={link.get('id')}>
            { link.get('title') }
          </Link>
        </li>
      );

    }



  }

  render() {

    return (
      <nav id={this.props.id}>
        <uL>
          { this.props.links.map(this.mapLink) }
        </uL>
      </nav>
    );
  }
}


export default MyNavbar;
