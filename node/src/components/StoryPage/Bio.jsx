import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import Card from '../common/Card';


class Bio extends React.Component {
  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  render() {
    return (
      <Card className="bio">
        <h1> My Story </h1>
        <p>
          <br />
          I was born and raised in Evanston, IL and I'm graduating from Case Western with a double major in Electrical Engineering and Computer Engineering in May of 2017. I'm a member of the Case Western Men's Varsity Tennis Team. I personally believe most people who do not play a sport in college underestimate the commitment that varsity athletics require. So to set the record straight, I have dedicated about twenty hours a week, year round, to training for Case Tennis. This has entirely shaped who I am and I'm proud of that.
          <br />
          <br />
          I love tennis, but my real passion is web development. I'm a full stack web developer, with experience ranging from Docker and Nginx to React and Redux. I love learning and I think new emerging technologies are dope, especially when they involve JavaScript.
          <br />
          <br />
          <br />
          Give me a little coffee, a vim text editor, and Kanye West's full discography and I can make anything.
        </p>
      </Card>
    );
  }
}


export default Bio;
