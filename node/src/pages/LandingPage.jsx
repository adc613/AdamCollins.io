import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import Navbar from '../components/LandingPage/Navbar';
import CountDownContainer from '../components/LandingPage/CountDownContainer';
import Title from '../components/LandingPage/Title';


class LandingPage extends React.Component {
  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  render() {
    return (
      <div id="LandingPage">
        <Navbar />
        <CountDownContainer />
        <Title />
      </div>
    );
  }
}


export default LandingPage;
