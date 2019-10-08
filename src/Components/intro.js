import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import chef from '../imgs/chef.png';
import waitress from '../imgs/waitress.png';
import buttonWaitress from '../imgs/button-waitress.png';
import buttonKitchen from '../imgs/button-chef.png';
import HeaderIntro from '../Components/HeaderIntro.js';
import '../Styles/intro.css';

class Intro extends Component {
  render() {
    return (
      <div>
        <HeaderIntro/>
          <p className="txtWelcome">Welcome XXX</p>
          <p className="txtIntro">Choose your position </p>
          <div  className="cointenerIntro">
            <div className="wiatressBlock">
              <img src={waitress} alt="" className="waitressImg"></img>
              <br />
              <Link to="/menu">
                <img src={buttonWaitress} alt="" className="buttonsIntro"></img>
              </Link>
            </div>
            <div className="chefBlock">
              <img src={chef} alt="" className="chefImg"></img>
              <br />
              <Link to="/kitchen">
                <img src={buttonKitchen} alt="" className="buttonsIntro"></img>
                {/* <button>Kitchen</button> */}
              </Link>
            </div>
          </div>  
      </div>
    );
  }
}

export default Intro;
