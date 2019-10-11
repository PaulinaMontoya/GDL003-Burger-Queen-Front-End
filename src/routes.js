import React from 'react';
import Intro from './Components/intro'
import Home from './Components/home'
import Menu from './Components/menu'
import FoodOrder from './Components/Dinner'
import Kitchen from './Components/kitchen'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Breakfast from './Components/breakfast';

const Routes = () => (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
   <Switch>
        <Route exact path="/intro" component={Intro}/>
        <Route exact path="/home" component={Home}/>
        <Route exact path="/menu" component={Menu}/>
        <Route exact path="/dinner" component={FoodOrder}/>
        <Route exact path="/breakfast" component={Breakfast}/>
        <Route exact path="/kitchen" component={Kitchen}/>
        <Route exact path="/" component={Home}/>
    </Switch>
    </BrowserRouter>
)

export default Routes