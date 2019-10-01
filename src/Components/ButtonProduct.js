import React, { Component } from 'react';
import '../Styles/buttonProduct.css';
//import classicBurger from '../imgs/dinner-classicburger.png';
import menu from "../menuData.js"

class ButtonProduct extends Component {
  render() {
    return (
      <div  >
      {menu.datos.map((item) =>
        <div className="cointenerButtonProduct">
        <img src={item.img} alt={item.dish} className="imgButtonProduct"></img>
        <p className="nameButtonProduct">{item.dish}</p>
        <p className="nameButtonProduct">${item.price}</p>
        <button className="buttonPlusProduct">+</button>
        </div>
        )}
        </div>
         
      )}
}

export default ButtonProduct;
