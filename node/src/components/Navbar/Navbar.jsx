import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { Link } from 'react-router';


class MyNavbar extends React.Component {
  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  mapLink(link) {
    return (
      <Link key={link.get('key')} to={link.get('href')} className={link.get('class')} id={link.get('id')}>
        {link.get('title')}
      </Link>
    );
  }

  render() {

    return (
      <nav id={this.props.id}>
        { this.props.links.map(this.mapLink) }
      </nav>
    );
  }
}


export default MyNavbar;
