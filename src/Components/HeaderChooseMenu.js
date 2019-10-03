import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import buttonLogout from '../imgs/button-logout.png';
import buttonMenus from '../imgs/button-menus.png';
import '../Styles/headerChooseMenu.css';

class HeaderChooseMenu extends Component {
  render() {
    return (
      <div className="cointenerHeaderMenu">
        <p className="userHeaderMenu">User: XXX</p>
        <div className="buttonsHeader">
          <Link to="/intro">
            <img src={buttonMenus} alt="" className="buttonHeaderMenu"></img>
          </Link>
          <Link to="/">
            <img src={buttonLogout} alt="" className="buttonHeaderKitchen"></img>
          </Link>
        </div>
      </div>
    );
  }
}

export default HeaderChooseMenu;
