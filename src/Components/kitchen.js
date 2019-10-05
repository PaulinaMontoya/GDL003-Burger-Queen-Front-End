import React, { Component } from 'react';
import HeaderKitchen from '../Components/HeaderKitchen.js';
import KitchenCard from '../Components/KitchenCard.js';
import '../Styles/kitchenCard.css';


class Kitchen extends Component {

    render() {
        return (
            <div>
                <HeaderKitchen />
                <div className="cointenerKitchenCards">
                <KitchenCard />
                <KitchenCard />
                <KitchenCard />
                </div>

            </div>
        )
    }
}

export default Kitchen;
