import React from 'react';
import {render} from 'react-dom';

let hello = function () { };

class App extends React.Component {

  render() {
    return (<p> Hello World! </p>);
  }

}

render(<App/>, document.getElementById('app'));
