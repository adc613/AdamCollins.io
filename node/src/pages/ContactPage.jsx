import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import MyNavbar from '../components/Navbar/MaterialNavbar';
import BuisnessCard from '../components/ContactPage/BuisnessCard';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../actions/metaActions';


class ContactPage extends React.Component {

  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  componentDidMount() {

    this.props.actions.activePage('contact');

  }

  render() {
    return (
      <div>

        <MyNavbar 
          activePage={this.props.activePage}
        />

        <div className="container">

          <br /> 
          <br /> 
          <br /> 

          <h1> Take My Buisness Card </h1>
          <br /> 
          <BuisnessCard />

        </div>

      </div>
    );
  }
}


function mapStateToProps(state) {

  return {
    activePage: state.meta.get('activePage'),
  };

}


function mapDispatchToProps(dispatch) {

  return {
    actions: bindActionCreators(actionCreators, dispatch),
  };

}


export default connect(mapStateToProps, mapDispatchToProps)(ContactPage);
