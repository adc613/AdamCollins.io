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

        <div className="left-section"> 
          <h3 className="company"> { this.props.company } </h3>
        </div>

        <div className="right-section">
          <h3 className="date"> { this.props.date } </h3>
        </div>

      </Card>
    );
  }
}


export default Experience;
