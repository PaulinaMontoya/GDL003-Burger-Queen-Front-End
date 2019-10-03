import React, { Component } from 'react';
//import buttonKitchen from '../imgs/breackfast-choose.png';
import HeaderKitchen from '../Components/HeaderKitchen.js';
import KitchenCard from '../Components/KitchenCard.js';


class Kitchen extends Component {

    render() {
        return (
            <div>
                <HeaderKitchen />
                <KitchenCard />
            

            </div>
        )
    }
}

export default Kitchen;
