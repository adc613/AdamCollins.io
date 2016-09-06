import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';


class ExperienceSection extends React.Component {
  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  render() {
    let className = this.props.className ? this.props.className + ' ' : '';
    return (
      <div className={ className + 'experience-section' }> 
        <h3> { this.props.title } </h3>
        { this.props.children }
      </div>
    );
  }
}


export default ExperienceSection;
