import React, { Component } from 'react';
import '../Styles/kitchenCard.css';


class KitchenCard extends Component {

    render() {
        return (
            <div className="cointenerCard">
                <p className="tableNumber">Table: XX</p>
                <ul>
                    <li className="listCard">XXXXXX</li>
                </ul>
                <button>Alrady</button>
            </div>
        )
    }
}

export default KitchenCard;