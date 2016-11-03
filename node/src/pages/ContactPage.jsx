import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import MyNavbar from '../components/Navbar/MaterialNavbar';
import BuisnessCard from '../components/ContactPage/BuisnessCard';


class ContactPage extends React.Component {

  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  render() {
    return (
      <div>
        <MyNavbar />

        <div className="container">

          <h1> Take My Buisness Card </h1>
          <BuisnessCard />

        </div>
      </div>
    );
  }
}


export default ContactPage;
