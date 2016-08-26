import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';


class MyNavbar extends React.Component {
  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  mapLink(link) {
    return (
      <a key={link.get('key')} href={link.get('href')} className={link.get('class')} id={link.get('id')}>
        {link.get('title')}
      </a>
    );
  }

  render() { 
    return (
      <nav className={this.props.class}>
        { this.props.links.map(this.mapLink) }
      </nav>
    );
  }
}


export default MyNavbar;
