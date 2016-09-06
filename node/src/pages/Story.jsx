import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import * as actionCreators from '../actions/storyPageActions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Bio from '../components/StoryPage/Bio';
import EntrepreneurialExperience from '../components/StoryPage/EntrepreneurialExperience';
import WorkExperience from '../components/StoryPage/WorkExperience';


class StoryPage extends React.Component {
  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  render() {
    //this.props.actions.test('goodbye world');
    return (
      <div id="storyPage">
        <Bio />
        <EntrepreneurialExperience />
        <WorkExperience />
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
