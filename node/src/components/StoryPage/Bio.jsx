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
          What up my nerds! 
          <br />
          <br />
          Welcome to the website. You may be wondering who I am at this point. I was born and raised in Evanston, IL. I'm graduating from Case Western with a double major in Electrical Engineering and Computer Engineering in May of 2017. I'm a member of the Case Western Men’s Varsity Tennis Team. I personally believe most people who do not play a sport in college underestimate the commitment that varsity athletics require. So to set the record straight, I have dedicated about twenty hours a week year round to training for Case Tennis. This has entirely shaped who I am and I'm proud of that.
          <br />
          <br />
          My real passion is web development. I'm a full stack web developer; which means I'm generalist who has some experience with technologies ranging from Docker to React. I love learning and I think new emerging technologies are dope, especially when they involve JavaScript.
          <br />
          <br />
          Moto:
          <br />
          Give me a little coffee, a vim text editor, Kanye West's full discography, and a StackOverflow account and I can make anything. 
        </p>
      </Card>
    );
  }
}


export default Bio;
