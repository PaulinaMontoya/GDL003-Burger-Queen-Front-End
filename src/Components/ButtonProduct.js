import React, { Component } from 'react';
import '../Styles/buttonProduct.css';
//import classicBurger from '../imgs/dinner-classicburger.png';
import menu from "../menuData.js";
import Comanda from "../Components/Comanda.js"

class ButtonProduct extends Component {

  getValues(dish, price){
    console.log(dish, price)
    
  }
 
  render() {
    return (
      <div >
        {menu.datos.map((item) =>
          <div className="cointenerButtonProduct">
            <img src={item.img} alt={item.dish} className="imgButtonProduct"></img>
            <p className="nameButtonProduct">{item.dish}</p>
            <p className="nameButtonProduct">${item.price}</p>
            <button className="buttonPlusProduct" onClick={() => this.getValues(item.dish, item.price)}>+</button>
            
          </div>
        )}
      </div>
    )
  }
}

export default ButtonProduct;
