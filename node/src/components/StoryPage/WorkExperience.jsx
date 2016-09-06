import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import ExperienceSection from './ExperienceSection';
import Experience from './Experience';


class WorkExperience extends React.Component {
  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  render() {
    return (
      <ExperienceSection title="Work Experience">

        <Experience
          data="May 2016 - present"
          company="Custom Orthopaedic Solutions" />

        <Experience
          data="May 2015 - August 2015"
          company="Custom Orthopaedic Solutions" />

      </ExperienceSection>

    );
  }
}

export default WorkExperience;
