import React from 'react';
import Intro from './Components/intro'
import Home from './Components/home'
import Menu from './Components/menu'
import FoodOrder from './Components/Dinner'
import Kitchen from './Components/kitchen'
import { Switch, Route } from 'react-router-dom';

const Routes = () => (
    <Switch>
        <Route exact path="/intro" component={Intro}/>
        <Route exact path="/home" component={Home}/>
        <Route path="/menu" component={Menu}/>
        <Route path="/dinner" component={FoodOrder}/>
        <Route path="/kitchen" component={Kitchen}/>
        <Route path="/" component={Home}/>
    </Switch>
)

export default Routes