import React, { Component } from 'react';
import logo from '../logo.svg'
class Header extends Component {
  render() {
    return (
      <header className="App-header">
        <img className="logo" src={logo} alt="logo" />
      </header>
    )
  }
}
export default Header;