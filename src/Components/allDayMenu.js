import React, { Component } from 'react';
import '../Styles/buttonProduct.css';
import '../Styles/comandaList.css';
import '../Styles/dinnerMenu.css';
import HeaderMenu from '../Components/HeaderMenu.js';
import ButtonProduct from '../Components/ButtonProduct.js';
import classicBurger from '../imgs/dinner-classicburger.png';
import buttonSendToKitchen from '../imgs/button-sendtokitchen.png';
import '../Styles/buttonProduct.css';
{
  /*
import { Link } from 'react-router-dom'
import classicBurger from '../imgs/dinner-classicburger.png';
import doubleBurger from '../imgs/dinner-doubleburger.png';
import baconBurger from '../imgs/dinner-baconburger.png';
import bigBurger from '../imgs/dinner-bigburger.png';
import frenchFries from '../imgs/dinner-frenchfries.png';
import soda750 from '../imgs/dinner-soda750ml.png';
import soda500 from '../imgs/dinner-soda500ml.png';
import water750 from '../imgs/dinner-water750ml.png';
import water500 from '../imgs/dinner-water500ml.png';
*/
}

class AllDayMenu extends Component {
  render() {
    return (
      <div className="headerMenu">
        <HeaderMenu />
        <div>
          <p className="txtDinnerMenu"> Dinner Menu </p>

          <ButtonProduct/>


        </div>
        <div className="cointenerComanda">
          <p className="numberTable">Number of table</p>
          <input className="inputNumberTable" type="text"></input>
          <ul>
            <li>
            </li>

            <li>
            </li>
          </ul>
          <div className="total">
            Total: XXXX
          </div>
          <img src={buttonSendToKitchen} alt="" className="buttonSendToKitchen"></img>
        </div>

          {/*
          <ul>
            <li>
              <img src={classicBurger} alt="" className="dinnerMenuImg"></img>
              <span>Classic Burger</span>
            </li>
            <li>
              <img src={doubleBurger} alt="" className="dinnerMenuImg"></img>
              <span>Double Burger</span>
            </li>
            <li>
              <img src={baconBurger} alt="" className="dinnerMenuImg"></img>
              <span>Bacon Burger</span>
            </li>
            <li>
              <img src={bigBurger} alt="" className="dinnerMenuImg"></img>
              <span>Big Burger</span>
            </li>
            <li>
              <img src={frenchFries} alt="" className="dinnerMenuImg"></img>
              <span>Big Burger</span>
            </li>
            <li>
              <img src={soda750} alt="" className="dinnerMenuImg"></img>
              <span>Soda 750 ml.</span>
            </li>
            <li>
              <img src={soda500} alt="" className="dinnerMenuImg"></img>
              <span>Soda 500 ml.</span>
            </li>
            <li>
              <img src={water750} alt="" className="dinnerMenuImg"></img>
              <span>Water 750 ml.</span>
            </li>
            <li>
              <img src={water500} alt="" className="dinnerMenuImg"></img>
              <span>Water 500 ml.</span>
            </li>
          </ul>
          */}
      </div>    
    );
  }
}

export default AllDayMenu;
