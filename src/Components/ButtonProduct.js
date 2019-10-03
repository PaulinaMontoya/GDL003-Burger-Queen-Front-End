import React, { Component } from 'react';
import '../Styles/buttonProduct.css';
//import classicBurger from '../imgs/dinner-classicburger.png';
import menu from "../menuData.js";

class ButtonProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dish: "",
      price: ""

    }
  }


  render() {
    return (
      <div >
        {menu.datos.map((item) =>
          <div className="cointenerButtonProduct" key={item.id}>
            <img src={item.img} alt={item.dish} className="imgButtonProduct"></img>
            <p className="nameButtonProduct">{item.dish}</p>
            <p className="nameButtonProduct">${item.price}</p>
            <button className="buttonPlusProduct" onClick={() => this.props.getValuesMethod(item.id)}>+</button>
          </div>
        )}
      </div>
    )
  }
}

export default ButtonProduct;
