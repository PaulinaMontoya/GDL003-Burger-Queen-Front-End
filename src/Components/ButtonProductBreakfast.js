import React, { Component } from 'react';
import '../Styles/buttonProduct.css';

class ButtonProductBreakfast extends Component {

   constructor(props){
       super(props);
       this.state = {
           products : []
       }
   }
 
   componentDidMount() {
       fetch('https://pacific-sands-67249.herokuapp.com/menuBreakfast', {

          headers: {
           Authorization: "pM170290aM291287mR270983dP160591"
           },
       })
       .then(response => response.json())
       .then(data => {
           this.setState({products: data})
       })
       .catch(error => console.error(error))
 }
   render() {
       return (
           <div >
               {this.state.products.map((item) =>
                   <div className="cointenerButtonProduct" key={item._id}>
                       <img src={item.img} alt={item.dish} className="imgButtonProduct"></img>
                       <p className="nameButtonProduct">{item.dish}</p>
                       <p className="nameButtonProduct">${item.price}</p>
                       <button className="buttonPlusProduct" onClick={() => this.props.getValuesMethod(item._id)}>+</button>
                   </div>
               )}
           </div>
       )
   }
}
export default ButtonProductBreakfast;

