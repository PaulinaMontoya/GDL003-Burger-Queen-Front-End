import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import buttonLogout from '../imgs/button-logout.png';
import buttonBack from '../imgs/button-back.png';
import '../Styles/headerMenu.css';

class HeaderChooseMenu extends Component {
  render() {
    return (
      <div className="cointenerHeaderMenu">
        <p className="userHeaderMenu">User : User123</p>
        <div className="buttonsHeader">
        <Link to="/">
            <img src={buttonLogout} alt="" className="buttonHeaderMenu"></img>
          </Link>
          <Link to="/intro">
            <img src={buttonBack} alt="" className="buttonHeaderMenu"></img>
          </Link>
        </div>
      </div>
    );
  }
}

export default HeaderChooseMenu;
