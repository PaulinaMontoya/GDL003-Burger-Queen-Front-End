import React, { Component } from 'react';
import '../Styles/kitchenCard.css';
import buttonDone from '../imgs/button-done.png';

class KitchenCard extends Component {

    render() {
        return (
            <div className="cointenerCard">
                <p className="tableNumber">Table: XX</p>
                <ul>
                    <li className="listCard">XXXXXX</li>
                </ul>
                <img src={buttonDone} alt="" className="buttonDone"></img>
            </div>
        )
    }
}

export default KitchenCard;