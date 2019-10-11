import React, { Component } from 'react';
import '../Styles/kitchenCard.css';
import buttonDone from '../imgs/button-done.png';

class KitchenCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            order: [],
        };
    }


    componentDidMount() {

        fetch('https://pacific-sands-67249.herokuapp.com/orders', {
            headers: {
                'Authorization': "pM170290aM291287mR270983dP160591"
            }
        })
            .then(response => response.json())
            .then(data => {
                this.setState({ order: data })
            })
            .catch(error => console.error(error))
    }

    doneOrder(orderId, index) {
        fetch('https://pacific-sands-67249.herokuapp.com/orders/' + orderId, {
            method: 'DELETE',
            headers: {
                'Authorization': "pM170290aM291287mR270983dP160591",
                //mode: 'no-cors',
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },

        })
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(err => console.log(err));

        const orderTemp = this.state.order
        orderTemp.splice(index, 1)
        this.setState({
            order: orderTemp
        })
    }

    render() {
        return (
            <div >
                {this.state.order.map((item, index) =>

                    <div className="cointenerCard" key={item._id}>
                        {item.dishes.map((dish) =>
                            <li>{dish}</li>)}
                        <p className="tableNumber">Table: {item.table}</p>
                        <ul>
                            <li className="listCard"> ${item.total}</li>
                        </ul>
                        <img src={buttonDone} alt="" className="buttonDone" onClick={() => this.doneOrder(item._id, index)}></img>
                    </div>
                )}
            </div>
        )
    }

}

export default KitchenCard;