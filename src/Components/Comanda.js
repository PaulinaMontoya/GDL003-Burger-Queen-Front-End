import React, { Component } from 'react';
import '../Styles/comandaList.css';
import buttonSendToKitchen from '../imgs/button-sendtokitchen.png';
import { Link } from 'react-router-dom';

class Comanda extends Component {

  render() {
   
    return (
      <div className="cointenerComanda">
        <p className="numberTable">Number of table</p>
        <input className="inputNumberTable" type="text"></input>
        <div>
          <ul>
            {this.props.list.map((item, index) =>
              <li className="listText">{item.dish}  ${item.price}
                <button className="buttonDelete" onClick={() => this.props.removeValuesMethod(index)}> - </button>
              </li>
            )}
          </ul>
          <p className="total">Total: ${this.props.total}</p>
        </div>
        <Link to="/kitchen">
          <img src={buttonSendToKitchen} alt="" className="buttonSendToKitchen"></img>
        </Link>
      </div>
    );
  }
}

export default Comanda;
