import React from 'react';
import {render} from 'react-dom';
import Router from './navigation/router';

let hello = function () { };

class App extends React.Component {

  render() {
    return (<Router />);
  }

}

render(<App/>, document.getElementById('app'));
