import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import CountDown from './CountDown';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../../actions/landingPageActions';


class CountDownContainer extends React.Component {

  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    this.updateCounter = this.updateCounter.bind(this);
  }

  componentWillMount() {

    this.updateCounter();

  }

  updateCounter() {

    this.props.actions.updateCountdown();

    if(this.props.active){

      setTimeout(this.updateCounter, 900);

    }

  }

  render() {
    return (
      <CountDown
        months={this.props.months}
        days={this.props.days}
        hours={this.props.hours}
        minutes={this.props.minutes}
        seconds={this.props.seconds}
      />
    );
  }
}


function mapStateToProps(state) {
  return {
    months: state.landingPage.get('months'),
    days: state.landingPage.get('days'),
    hours: state.landingPage.get('hours'),
    minutes: state.landingPage.get('minutes'),
    seconds: state.landingPage.get('seconds'),
    active: state.landingPage.get('active'),
  };
}

function mapDispatchToProps(dispatch) {

  return {
    actions: bindActionCreators(actionCreators, dispatch),
  };

}


export default connect(mapStateToProps, mapDispatchToProps)(CountDownContainer);
