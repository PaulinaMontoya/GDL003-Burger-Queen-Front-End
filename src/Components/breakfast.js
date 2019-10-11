import React, { Component } from 'react';
import '../Styles/buttonProduct.css';
import '../Styles/comandaList.css';
import '../Styles/dinnerMenu.css';
import HeaderMenu from './HeaderMenu.js';
//import menu from "../menuData.js";
//import classicBurger from '../imgs/dinner-classicburger.png';
import '../Styles/buttonProduct.css';
import ButtonProductBreakfast from './ButtonProductBreakfast';
import ComandaBreakfast from './ComandaBreakfast';
class Breakfast extends Component {
   constructor(props) {
       super(props);
       this.state = {
           products: [],
           total: 0,
           list: []
       };
   }
 componentDidMount() {
   fetch('https://pacific-sands-67249.herokuapp.com/menuBreakfast', {
    headers: {
      Authorization: "pM170290aM291287mR270983dP160591"
    }
   })
   .then(response => response.json())
   .then(data => {
       this.setState({products: data})
     //console.log(data)
   })
   .catch(error => console.error(error))
}
 //Obtener valores
 getValues = (_id) => {
   const data = this.state.products.find(item => item._id === _id)
   //menu.breakfast.find(item => item.id === id)
   const listConc = this.state.list
   listConc.push({
     dish: data.dish,
     price: data.price
   })
   //console.log(this.state.list)

   this.setState({
     total: +this.state.total + +data.price,
     list: listConc
   });
   
 }
 
   removeValues = (index) => {
       const listConc = this.state.list
       const price = listConc[index].price
       listConc.splice(index, 1)
       this.setState({
           total: +this.state.total - +price,
           list: listConc
       })
   }
   render() {
       return (
           <div className="headerMenu">
               <HeaderMenu />
               <div className="cointenerComandaMenuDinner">
                   <div className="buttonAndComanda">
                       <div> 
                           <p className="txtDinnerMenu"> Breakfast Menu {this.state.count}</p>
                           <ButtonProductBreakfast getValuesMethod={this.getValues}
                               submitValuesMethod={this.submitValues} />
                       </div>
                       <ComandaBreakfast submitValuesMethod={this.submitValues}
                           removeValuesMethod={this.removeValues}
                           total={this.state.total}
                           list={this.state.list} />
                   </div>
               </div>
           </div>
       );
   }
}
export default Breakfast;