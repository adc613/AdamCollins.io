import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { Router, Route, Link, browserHistory } from 'react-router';
import LandingPage from '../pages/LandingPage';
import StoryPage from '../pages/Story';
import ContactPage from '../pages/ContactPage';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={LandingPage} />
        <Route path="/story" component={StoryPage} />
        <Route path="/contact" component={ContactPage} />
      </Router>
    );
  }
}


export default App;
