import React, { Component } from 'react';
import classicBurger from '../imgs/dinner-classicburger.png';
import doubleBurger from '../imgs/dinner-doubleburger.png';
import baconBurger from '../imgs/dinner-baconburger.png';
import bigBurger from '../imgs/dinner-bigburger.png';
import frenchFries from '../imgs/dinner-frenchfries.png';
import soda750 from '../imgs/dinner-soda750ml.png';
import soda500 from '../imgs/dinner-soda500ml.png';
import water750 from '../imgs/dinner-water750ml.png';
import water500 from '../imgs/dinner-water500ml.png';

class AllDayMenu extends Component {
  render() {
    return (
      <div>
        <div>
          <p> DINNER MENU </p>
          <ul>
            <li>
              <img src={classicBurger} alt="" className="dinnerMenuImg"></img>
              <span>Classic Burger</span>
            </li>
            <li>
              <img src={doubleBurger} alt="" className="dinnerMenuImg"></img>
              <span>Double Burger</span>
            </li>
            <li>
              <img src={baconBurger} alt="" className="dinnerMenuImg"></img>
              <span>Bacon Burger</span>
            </li>
            <li>
              <img src={bigBurger} alt="" className="dinnerMenuImg"></img>
              <span>Big Burger</span>
            </li>
            <li>
              <img src={frenchFries} alt="" className="dinnerMenuImg"></img>
              <span>Big Burger</span>
            </li>
            <li>
              <img src={soda750} alt="" className="dinnerMenuImg"></img>
              <span>Soda 750 ml.</span>
            </li>
            <li>
              <img src={soda500} alt="" className="dinnerMenuImg"></img>
              <span>Soda 500 ml.</span>
            </li>
            <li>
              <img src={water750} alt="" className="dinnerMenuImg"></img>
              <span>Water 750 ml.</span>
            </li>
            <li>
              <img src={water500} alt="" className="dinnerMenuImg"></img>
              <span>Water 500 ml.</span>
            </li>
          </ul>
        </div>

        <div>
          <div>
            <ul>
              <li>
              </li>
            </ul>
            <button>Send to kitchen</button>
          </div>
        </div>
      </div>
    );
  }
}

export default AllDayMenu;
