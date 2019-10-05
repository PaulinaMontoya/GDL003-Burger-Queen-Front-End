import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import buttonLogout from '../imgs/button-logout.png';
import buttonBack from '../imgs/button-back.png';
import '../Styles/headerMenu.css';

class HeaderChooseMenu extends Component {
  render() {
    return (
      <div className="cointenerHeaderMenu">
        <p className="userHeaderMenu">User : XXX</p>
        <div className="buttonsHeader">
          <Link to="/intro">
            <img src={buttonBack} alt="" className="buttonHeaderMenu"></img>
          </Link>
          <Link to="/">
            <img src={buttonLogout} alt="" className="buttonHeaderMenu"></img>
          </Link>
        </div>
      </div>
    );
  }
}

export default HeaderChooseMenu;
