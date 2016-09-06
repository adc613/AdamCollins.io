import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import Card from '../common/Card';


class Experience extends React.Component {
  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  render() {
    return (
      <Card>

        <div class="left-section"> 
          <h3 class="company"> { this.props.company } </h3>
        </div>

        <div class="right-section">
          <h3 class="date"> { this.props.date } </h3>
        </div>

      </Card>
    );
  }
}


export default Experience;
