import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import buttonMenus from '../imgs/button-menus.png';
import '../Styles/headerMenu.css';

class HeaderMenu extends Component {
  render() {
    return (
      <div className="cointenerHeaderMenu">
        <p>Waitress XXX</p>
        <Link to="/menu">
          <img src={buttonMenus} alt="" className="buttonHeaderMenu"></img>
        </Link>
        <img src={buttonMenus} alt="" className="buttonHeaderMenu"></img>

      </div>
    );
  }
}

export default HeaderMenu;
