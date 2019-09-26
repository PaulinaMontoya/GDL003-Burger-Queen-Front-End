import React, { Component } from 'react';
import classicBurger from '../imgs/dinner-classicburger.png';

class AllDayMenu extends Component {
  render() {
    return (
      <div>
        <div>
          <p> XXXXX </p>
          <ul>
            <li>
              <img src={classicBurger} alt="" className="dinnerMenuImg"></img>
              <span>Classic Burger</span>
            </li>
          </ul>
        </div>

        <div>
          <div>
            <ul></ul>
            <button>Send to kitchen</button>
          </div>
        </div>
      </div>
    );
  }
}

export default AllDayMenu;
