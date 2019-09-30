import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import circle from '../imgs/circle.png';
import buttonWaitress from '../imgs/button-waitress.png';
import buttonKitchen from '../imgs/button-chef.png';

class Home extends Component {

    render() {
        return (
            <div align="center">
                <Link to="/intro">
                    <button>Enter</button>
                </Link>
                <p />

      
    </div> 
    );
  }
}

export default Home;
