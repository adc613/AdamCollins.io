import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import * as actionCreators from '../actions/storyPageActions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


class StoryPage extends React.Component {
  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  render() {
    this.props.actions.test('goodbye world');
    return (
      <div>
        {this.props.testText}
      </div>
    );
  }
}


function mapStateToProps(state) {

  return { testText: state.story.get('testText') };

}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actionCreators, dispatch),
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(StoryPage);
