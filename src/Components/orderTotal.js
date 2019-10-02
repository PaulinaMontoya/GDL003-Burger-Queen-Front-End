import React, { Component } from 'react';

class OrderTotal extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            total: 0
        };
      }
    render() {
        return (
            <div>
                <h1>Total: {this.state.total}</h1>
            </div>
        )

    }


}

export default OrderTotal