import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import Card from '../common/Card';


class Experience extends React.Component {
  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  render() {
    let isOpen = this.props.isOpen;
    return (
      <Card onClick={this.props.onClick} 
        className={isOpen ? "experience open" : "experience closed"} >

        <div className="title">

          <div className="left-block">
            <h3 className="company"> { this.props.company } </h3>
          </div>

          <div className="right-block">
            <h3 className="date"> { this.props.date } </h3>
          </div>
          <div style={ { "clear": "both" } }></div>
        </div>
        <div className={isOpen ? "description open" : "description closed"} >
          <p> 
            Lorem ipsum asldkfj jsfkfhelasof lkjero this is a random descritpion
            i dont care jsut some placeholder text hows likfe good tahts good
          </p>
        </div>

      </Card>
    );
  }
}


export default Experience;
