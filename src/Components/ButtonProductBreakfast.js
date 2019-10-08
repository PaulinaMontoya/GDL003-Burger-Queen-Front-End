import React, { Component } from 'react';
import '../Styles/buttonProduct.css';
//import classicBurger from '../imgs/dinner-classicburger.png';
import menu from "../menuData.js";


class ButtonProductBreakfast extends Component {

   /* var cors = require('cors')
    
    app.route('/menuBreakfast')
    //GET endpoint for menuBreakfast
    .get(getMenuBreakfast, cors());

    app.route('/menuBreakfast', cors())*/


    componentDidMount() {
        const headers = new Headers();
        headers.set("token", "pM170290aM291287mR270983dP160591");
        //https://api.github.com/orgs/nodejs
        fetch('http://172.17.33.47/menuBreakfast', {
            method: "GET",
            headers: headers,
          })
          .then(response => response.json())
          .then(data => {
            console.log(data)
          })
          .catch(error => console.error(error))
    }

    render() {

        return (

            <div >
                {menu.breakfast.map((item) =>
                    <div className="cointenerButtonProduct" key={item.id}>
                        <img src={item.img} alt={item.dish} className="imgButtonProduct"></img>
                        <p className="nameButtonProduct">{item.dish}</p>
                        <p className="nameButtonProduct">${item.price}</p>
                        <button className="buttonPlusProduct" onClick={() => this.props.getValuesMethod(item.id)}>+</button>
                    </div>
                )}
            </div>
        )
    }
}

export default ButtonProductBreakfast;
