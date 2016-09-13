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
          company="CLK Tech" />

        <Experience
          date="May 2016 - present"
          key="rentIQ"
          sizeName="rentIQ"
          onClick={ this.onExperienceClick('rentIQ') }
          isOpen={this.props.rentIQ.get('isOpen')}
          company="RentIQ" />

        <Experience
          date="May 2016 - present"
          key="koalah"
          sizeName="koalah"
          onClick={ this.onExperienceClick('koalah') }
          isOpen={this.props.koalah.get('isOpen')}
          company="Koalah" />

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
