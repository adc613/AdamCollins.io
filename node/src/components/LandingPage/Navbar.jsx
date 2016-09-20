import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import MyNavbar from '../Navbar/Navbar';
import { fromJS } from 'immutable';


const className = 'landing-page-nav-link';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  render() {
    let links = fromJS([
        {
          key: 'nav1',
          title: 'Story',
          href: '/story',
          class: className,
          id: ''
        },
        {
          key: 'nav2',
          title: 'Blog',
          href: '#',
          class: className,
          id: ''
        },
        {
          key: 'nav3',
          title: 'How',
          href: '#',
          class: className,
          id: ''
        },
        {
          key: 'nav4',
          title: 'Contact',
          href: '#',
          class: className,
          id: ''
        },
      ]);

    let id = 'landing-page-nav';

    return (
      <MyNavbar
        links={links}
        id={id}
      />
    );
  }
}

export default Navbar;
