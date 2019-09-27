import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Home extends Component {

    render() {
        return (
            <div align="center">
                <Link to="/intro">
                    <button>Enter</button>
                </Link>
                <p />
            </div>
        )
    }
}

export default Home;
