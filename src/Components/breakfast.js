import React, { Component } from 'react';
import '../Styles/buttonProduct.css';
import '../Styles/comandaList.css';
import '../Styles/dinnerMenu.css';
import HeaderMenu from './HeaderMenu.js';
import menu from "../menuData.js";
//import classicBurger from '../imgs/dinner-classicburger.png';
import '../Styles/buttonProduct.css';
import ButtonProductBreakfast from './ButtonProductBreakfast';
import ComandaBreakfast from './ComandaBreakfast';


class Breakfast extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      list: []
    };
  }
  //Obtener valores
  getValues = (id) => {
    const data = menu.breakfast.find(item => item.id === id)

    const listConc = this.state.list

    listConc.push({
      dish: data.dish, 
      price: data.price
    })
    
    this.setState({
      total: +this.state.total + +data.price,
      list: listConc
    });
  }

  removeValues = (index) => {
    const listConc = this.state.list
    const price = listConc[index].price
    listConc.splice(index,1)
    this.setState({
      total: +this.state.total - +price,
      list: listConc
    })    
  }


  render() {
    return (
      <div className="headerMenu">
        <HeaderMenu />
        <div className="cointenerComandaMenuDinner">
          <p className="txtDinnerMenu"> Breakfast Menu {this.state.count}</p>
          <div className="buttonAndComanda">
            <ButtonProductBreakfast getValuesMethod={this.getValues} 
              submitValuesMethod={this.submitValues} />

            <ComandaBreakfast submitValuesMethod={this.submitValues}
              removeValuesMethod={this.removeValues}
              total={this.state.total}
              list={this.state.list} />
          </div>
        </div>
      </div>
    );
  }
}

export default Breakfast;
