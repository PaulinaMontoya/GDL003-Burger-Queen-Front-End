import React, { Component } from 'react';
import HeaderKitchen from '../Components/HeaderKitchen.js';
import KitchenCard from '../Components/KitchenCard.js';
import Footer from '../Components/Footer.js';
import '../Styles/kitchenCard.css';


class Kitchen extends Component {

    render() {
        return (
            <div>
                <HeaderKitchen />
                <div className="cointenerKitchenCards">
                <KitchenCard />
                </div>
                <Footer />

            </div>
        )
    }
}

export default Kitchen;
