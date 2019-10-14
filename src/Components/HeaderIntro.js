import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import buttonLogout from '../imgs/button-logout.png';
import '../Styles/headerMenu.css';

class HeaderIntro extends Component {
  render() {
    return (
      <div className="cointenerHeaderMenu">
        <p className="userHeaderMenu">User : User123</p>
        <div className="buttonsHeader">
          <Link to="/">
            <img src={buttonLogout} alt="" className="buttonHeaderMenu"></img>
          </Link>
        </div>
      </div>
    );
  }
}

export default HeaderIntro;
