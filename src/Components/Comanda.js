import React, { Component } from 'react';
import '../Styles/comandaList.css';
import buttonSendToKitchen from '../imgs/button-sendtokitchen.png';
import { Link } from 'react-router-dom';

class Comanda extends Component {
  constructor(props) {
    super(props);
    this.state = {
      price:"",
      dish: "",
      total: 10
    };
  }
  test(){
    console.log("test")
  }
  
  render() {
    return (
      <div className="cointenerComanda">
        <p className="numberTable">Number of table</p>
        <input className="inputNumberTable" type="text"></input>
        <div>
          <ul>
            <li> {this.state.dish}</li>
          </ul>
          <p className="total">Total: {this.state.total}</p>
        </div>
        <Link to="/kitchen">
          <img src={buttonSendToKitchen} alt="" className="buttonSendToKitchen"></img>
        </Link>
      </div>
    );
  }
}

export default Comanda;
