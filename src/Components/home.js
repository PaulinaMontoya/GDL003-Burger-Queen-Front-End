import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import circle from '../imgs/circle.png';
import buttonEnter from '../imgs/button-enter.png';
import '../Styles/home.css';
//import buttonKitchen from '../imgs/button-chef.png';
//import form from "./Components/form"

class Home extends Component {

  render() {
    return (
      <div className="cointenerHome">
        <img src={circle} alt="" className="logo"></img>
        <br/>
        <p className="userNameTxt">Write your User Name</p>
        <input className="userName" type="text"></input>
        <br/>
        <Link to="/intro">
          <img src={buttonEnter} alt="" className="buttonsHome"></img>
        </Link>
      </div>
    );
  }
}

export default Home;
