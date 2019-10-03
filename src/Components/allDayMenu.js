import React, { Component } from 'react';
import '../Styles/buttonProduct.css';
import '../Styles/comandaList.css';
import '../Styles/dinnerMenu.css';
import HeaderMenu from '../Components/HeaderMenu.js';
import ButtonProduct from '../Components/ButtonProduct.js';
import Comanda from '../Components/Comanda.js';
//import classicBurger from '../imgs/dinner-classicburger.png';
import '../Styles/buttonProduct.css';
//import { isTemplateElement } from '@babel/types';
//import { isTemplateElement } from '@babel/types';
//import { getHeapStatistics } from 'v8';


class AllDayMenu extends Component {
state = {
  dishName : "",
  dishPrice: ""
}

addProduct = (dishName, dishPrice) => {
  this.setState({dishName: dishName})
  this.setState({dishPrice: dishPrice})
}

  render() {
    return (
      <div className="headerMenu">
        <HeaderMenu />
        <div className="cointenerComandaMenuDinner">
          <p className="txtDinnerMenu"> Dinner Menu </p>
          <div className="buttonAndComanda">
          <ButtonProduct addProduct={this.addProduct}/>
          <Comanda dishName={this.state.dishName} dishPrice={this.state.dishPrice} />
          </div>
        </div>
      </div>    
    );
  }
}

export default AllDayMenu;
