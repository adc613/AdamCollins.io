import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import ExperienceSection from './ExperienceSection';
import Experience from './Experience';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../../actions/storyPageActions';


class WorkExperience extends React.Component {
  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  onExperienceClick(key) {
    let toggleOpen = this.props.actions.toggleOpen;
    return () => {
      toggleOpen(key);
    };
  }

  render() {
    return (
      <ExperienceSection title="Work Experience">

        <Experience
          date="May 2016 - Present"
          key="cos"
          sizeName="cos"
          onClick={ this.onExperienceClick('cos') }
          isOpen={this.props.cos.get('isOpen')}
          company="Custom Orthopaedic Solutions"
        >
          <ul>
            <li> Building single page web apps employing functional programmning princples using React/Redux/Immutable</li>
            <li> Leverage the power of the broswer to make an 3D renderer with THREE.js </li>
            <li> Working in an Agile work environment with daily scrum meetings and weekly sprints </li>
          </ul>


        </Experience>


        <Experience
          date="May 2015 - August 2015"
          company="i3 Control"
          key='i3'
          sizeName="i3"
          onClick={ this.onExperienceClick('i3') }
          isOpen={this.props.i3.get('isOpen')}
        >

          <ul>
            <li> Messed around with Ardino microcontrollers to autmate HVAC systems in commercial buisnesses </li>
            <li> Worked with the modbus protocol to read and write sensor data over a serial connection </li>
          </ul>


        </Experience>

      </ExperienceSection>

    );
  }
}

function mapStateToProps(state) {
  return {
    cos: state.story.get('cos'),
    i3: state.story.get('i3'),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actionCreators, dispatch),
  };
}



export default connect(mapStateToProps, mapDispatchToProps)(WorkExperience);
