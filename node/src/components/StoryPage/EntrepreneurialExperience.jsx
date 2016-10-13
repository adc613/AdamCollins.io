import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import ExperienceSection from './ExperienceSection';
import Experience from './Experience';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../../actions/storyPageActions';


class EntrepreneurialExperience extends React.Component {
  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    this.onExperienceClick = this.onExperienceClick.bind(this);
  }

  onExperienceClick(key) {
    let toggleOpen = this.props.actions.toggleOpen;
    return () => {
      toggleOpen(key);
    };
  }

  render() {
    return (
      <ExperienceSection title="Entrepreneurial Experience">

        <Experience
          date="May 2016 - present"
          key="clkTech"
          sizeName="clkTech"
          onClick= { this.onExperienceClick('clkTech') }
          isOpen={this.props.clkTech.get('isOpen')}
          company="CLK Tech"
        >
          <ul>

            <li>Founded a technical consulting company with a team of software developers and project managers</li>

            <li>Handled technical communication with non-technical clients in order to meet client needs</li>

            <li>Worked as the Technical and Team Lead for the majority of projects</li>

          </ul>
        </Experience>

        <Experience
          date="August 2015 - Febtruary 2016"
          key="rentIQ"
          sizeName="rentIQ"
          onClick={ this.onExperienceClick('rentIQ') }
          isOpen={this.props.rentIQ.get('isOpen')}
          company="RentIQ"
        >
          <ul>

            <li>Developed a web app with Twilio integration for Landlords to manage maintenacne request</li>
            <li>Obtained a paying customer!</li>
            <li>Called every landload we could find in Cleveland</li>
            <li>After finding a need from conversations with landlords developed a plan to create asset management software</li>
            <li>Obtained several prospective buyers</li>

          </ul>

        </Experience>

        <Experience
          date="January 2014 - August 2015"
          key="koalah"
          sizeName="koalah"
          onClick={ this.onExperienceClick('koalah') }
          isOpen={this.props.koalah.get('isOpen')}
          company="Koalah"
        >

          <ul>
            <li>Worked with the Django Web Framework to serve open source HTML5 games</li>
            <li>Entered late-stage acquisition talks with a Fortune 500 company and a venture-backed startup</li>
          </ul>

        </Experience>

      </ExperienceSection>

    );
  }
}

function mapStateToProps(state) {
  return {
    clkTech: state.story.get('clkTech'),
    rentIQ: state.story.get('rentIQ'),
    koalah: state.story.get('koalah'),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actionCreators, dispatch),
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(EntrepreneurialExperience);
