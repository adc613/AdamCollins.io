import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import ExperienceSection from './ExperienceSection';
import Experience from './Experience';


class EntrepreneurialExperience extends React.Component {
  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  render() {
    return (
      <ExperienceSection title="Entrepreneurial Experience">

        <Experience
          data="May 2016 - present"
          company="CLK Tech" />

        <Experience
          data="Placeholder date"
          company="RentIQ" />

        <Experience
          data="Placeholder date"
          company="Koalah" />

      </ExperienceSection>

    );
  }
}

export default EntrepreneurialExperience;
