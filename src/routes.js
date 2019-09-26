import React from 'react';
import Home from './Components/home'
import Menu from './Components/menu'
import FoodOrder from './Components/allDayMenu'
import Kitchen from './Components/kitchen'
import { Switch, Route } from 'react-router-dom';

const Routes = () => (
    <Switch>
        <Route exact path="/home" component={Home}/>
        <Route path="/menu" component={Menu}/>
        <Route path="/allDayMenu" component={FoodOrder}/>
        <Route path="/kitchen" component={Kitchen}/>
        <Route path="/" component={Home}/>
    </Switch>
)

export default Routes