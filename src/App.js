import React, { Component } from 'react';
import './resources/styles.css';
import Header from './components/header_footer/header';
class App extends Component {
  render() {
    return (
      <div className="App" style={{ hight: "1500px", background:'cornflowerblue'}}>
      <Header/>
      </div>
    );
  }
}

export default App;