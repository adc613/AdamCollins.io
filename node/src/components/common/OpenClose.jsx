import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../../actions/openCloseActions';


class OpenClose extends React.Component {
  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  componentDidMount() {

    let id = this.props.uniqueId;
    let height = document.getElementById(id).offsetHeight;
    this.props.actions.initialize(id, height);

  }

  render() {

    let height = this.props.isOpen ? this.props.maxHeight + this.props.bias : 0;
    let style = {
      maxHeight: height + "px",
      overflow: "hidden"
      };

    return (
      <div
        className={this.props.className}
        style={style}
      >
        <div
          id={this.props.uniqueId}
        >
          { this.props.children }
        </div>
      </div>
    );

  }
}

function mapStateToProps(state, ownProps) {

  // Currently there is no code that toggles isOpen on openClsoe state. I have no
  // plans of implementing such code currently, but I'll leave this code here in case
  // I change my mind
  let isOpen = ownProps.isOpen || state.openClose.getIn([ ownProps.uniqueId, 'isOpen' ]);
  let bias = ownProps.bias || 30;

  return {
    isOpen,
    bias,
    maxHeight: state.openClose.getIn([ ownProps.uniqueId, 'maxHeight' ]),
  };

}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actionCreators, dispatch),
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(OpenClose);
