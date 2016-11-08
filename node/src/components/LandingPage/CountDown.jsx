import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';


class CountDown extends React.Component {
  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }


  render() {
    return (
      <div id="count-down">
        <div className="left-block">
          <h2>Graduation Date</h2>
          <h3>May 21, 2017</h3>
        </div>
        <div className="right-block">

          <div className="time-block">
            <div className="time-number">
              <h2>{ this.props.months }</h2>
            </div>
            <div className="time-title">
              <h6>months</h6>
            </div>
          </div>

          <div className="time-block">
            <div className="time-number">
              <h2>{ this.props.days }</h2>
            </div>
            <div className="time-title">
              <h6>days</h6>
            </div>
          </div>

          <div className="time-block">
            <div className="time-number">
              <h2>{ this.props.hours }</h2>
            </div>
            <div className="time-title">
              <h6>hours</h6>
            </div>
          </div>

          <div className="time-block">
            <div className="time-number">
              <h2>{ this.props.minutes }</h2>
            </div>
            <div className="time-title">
              <h6>minutes</h6>
            </div>
          </div>

          <div className="time-block">
            <div className="time-number">
              <h2>{ this.props.seconds }</h2>
            </div>
            <div className="time-title">
              <h6>seconds</h6>
            </div>
          </div>

        </div>
      </div>
    );
  }
}


export default CountDown;
