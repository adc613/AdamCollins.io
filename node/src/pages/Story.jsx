import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import * as actionCreators from '../actions/storyPageActions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Bio from '../components/StoryPage/Bio';
import EntrepreneurialExperience from '../components/StoryPage/EntrepreneurialExperience';
import WorkExperience from '../components/StoryPage/WorkExperience';
import MyNavbar from '../components/Navbar/MaterialNavbar';


class StoryPage extends React.Component {
  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  render() {
    return (
      <div>
        <MyNavbar />
        <div id="story-page-content">
          <Bio />
          <EntrepreneurialExperience />
          <WorkExperience />
        </div>
      </div>
    );
  }
}


function mapStateToProps(state) {

  return {};

}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actionCreators, dispatch),
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(StoryPage);
