import React, { Component } from 'react';
import '../Styles/comandaList.css';
import buttonSendToKitchen from '../imgs/button-sendtokitchen.png';
import { Link } from 'react-router-dom';

class Comanda extends Component {


  render() {
    const { dishName, dishPrice } = this.props;

    return (
      <div className="cointenerComanda">
        <p className="numberTable">Number of table</p>
        <input className="inputNumberTable" type="text"></input>
        <div>
          <ul>
            <li>{dishName + dishPrice}</li>
          </ul>
          <p className="total">Total: XXXX</p>
        </div>
        <Link to="/kitchen">
          <img src={buttonSendToKitchen} alt="" className="buttonSendToKitchen"></img>
        </Link>
      </div>
    );
  }
}

export default Comanda;
