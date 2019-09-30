import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import imgDinnerMenu from '../imgs/dinner-choose.png';
import buttonDinner from '../imgs/button-dinner.png';
import imgBreakfastMenu from '../imgs/breackfast-choose.png';
import buttonBreakfast from '../imgs/button-breakfast.png';

class Menu extends Component {
  render() {
    return (
      <div>
        <div className="goDinnerMenu">
          <img src={imgDinnerMenu} alt="" className="imgThird"></img>
          <br />
          <Link to="/allDayMenu">
            <img src={buttonDinner} alt="" className="button"></img>
          </Link>
        </div>

        <div className="goBreakfastMenu">           
        <img src={imgBreakfastMenu} alt="" className="imgThird"></img>
          <br />
          <Link to="/">
            <img src={buttonBreakfast} alt="" className="button"></img>
          </Link>
        </div>
      </div>
    );
  }
}

export default Menu;
