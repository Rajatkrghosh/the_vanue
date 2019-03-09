import React, { Component } from 'react';
import './resources/styles.css';

import Header from './components/header_footer/Header';
import Feature from './components/feature';

class App extends Component {
  render() {
    return (
      <div className="App" style={{ height: "1500px", background:'cornflowerblue'}}>
      <Header/>
      <Feature/>
      </div>
    );
  }
}

export default App;
