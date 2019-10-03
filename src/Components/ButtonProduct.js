import React, { Component } from 'react';
import '../Styles/buttonProduct.css';
//import classicBurger from '../imgs/dinner-classicburger.png';
import menu from "../menuData.js"


class ButtonProduct extends Component {

  /* getValues(dish, price){
    console.log(dish, price)
  } */

  render() {
    const {addProduct} = this.props;

    return (
      <div  >
      {menu.datos.map((item, index) =>
        <div key={index} className="cointenerButtonProduct">
        <img src={item.img} alt={item.dish} className="imgButtonProduct"></img>
        <p className="nameButtonProduct">{JSON.stringify(item.dish)}</p>
        <p className="nameButtonProduct">${item.price}</p>
        <button className="buttonPlusProduct" onClick={() => addProduct("hamburgues", "20")}>+</button>
        </div>
        )}
        </div>
         
      )}
}

export default ButtonProduct;
