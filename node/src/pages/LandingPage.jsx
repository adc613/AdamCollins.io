import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import Navbar from '../components/LandingPage/Navbar';
import CountDown from '../components/LandingPage/CountDown';
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
        <CountDown />
        <Title />
      </div>
    );
  }
}


export default LandingPage;
