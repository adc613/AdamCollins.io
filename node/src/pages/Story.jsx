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
    this.updatePosition = this.updatePosition.bind(this);
  }

  componentDidMount() {

    let image = document.getElementById('background-banner-image');

    image.addEventListener('load', () => { this.initializePositions(); });


  }

  initializePositions() {

    let image = document.getElementById('background-banner-image');
    let offset = image.offsetHeight;
    let container = document.getElementById('floating-container');

    this.marginTop = offset / 2;
    this.offset = offset / 2;

    container.style.marginTop = this.marginTop + 'px';

    //document.addEventListener('scroll', this.updatePosition);
    window.onscroll = this.updatePosition;

  }

  updatePosition(event) {

    let container = document.getElementById('floating-container');
    let image = document.getElementById('background-banner-image');

    let offset = image.offsetHeight;
    let position = window.scrollY / 2;




    this.marginTop = Math.min(offset - 20, offset / 2 + position);
    container.style.marginTop  = this.marginTop + 'px';


  }

  render() {
    return (
      <div>
        <MyNavbar />
        <img id='background-banner-image' src="/images/team.png" />
        <div id="floating-container">
          <div id="story-page-content">
            <Bio />
            <EntrepreneurialExperience />
            <WorkExperience />
          </div>
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
