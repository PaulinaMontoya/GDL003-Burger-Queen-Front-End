import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Intro extends Component {

    render() {
        return (
            <div align="center">
                
                <Link to="/menu">
                    <button>Waiter</button>
                </Link>
                <p />
                <Link to="/kitchen">
                    <button>Kitchen</button>
                </Link>
            </div>
        )
    }
}

export default Intro;