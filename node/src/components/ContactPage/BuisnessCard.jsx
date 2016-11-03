import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import Card from '../common/Card';


class BuisnessCard extends React.Component {

  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  render() {
    return (
      <Card>

        <div className="title">
          <h2> Full Stack Web Deveoper </h2>
        </div>

        <div classNmae="name">
          <h1> Adam Collins </h1>
        </div>

        <div className="logo">
          <h1>AC</h1>
        </div>

        <div className="info">
          <ul>
            <li id="email">adc613@gmail.com</li>
            <li id="twitter">@adc613</li>
            <li id="my-title">Partner at CLK Technologies</li>
          </ul>
        </div>

      </Card>

    );
  }
}


export default BuisnessCard;
