import React, { Component } from 'react';
import '../Styles/buttonProduct.css';
import '../Styles/comandaList.css';
import '../Styles/dinnerMenu.css';
import HeaderMenu from '../Components/HeaderMenu.js';
import ButtonProduct from '../Components/ButtonProduct.js';
import Comanda from '../Components/Comanda.js';
//import classicBurger from '../imgs/dinner-classicburger.png';
import '../Styles/buttonProduct.css';


class AllDayMenu extends Component {
  render() {
    return (
      <div className="headerMenu">
        <HeaderMenu />
        <div className="cointenerComandaMenuDinner">
          <p className="txtDinnerMenu"> Dinner Menu </p>
          <div className="buttonAndComanda">
          <ButtonProduct/>
          <Comanda/>
          </div>
        </div>
      </div>    
    );
  }
}

export default AllDayMenu;
