
import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';


class Title extends React.Component {
  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  render() {
    return (
      <div id="landing-page-title">
        <h1>A Personal Site</h1>
        <h2 className="bold">By Adam Collins</h2>
        <h3>Full Stack Web Developer</h3>
      </div>
    );
  }
}


export default Title;
