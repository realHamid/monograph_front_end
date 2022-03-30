import React, { Component } from "react";


import { Route, Switch } from 'react-router-dom';
import Test from "./Test/Test";
import Category from "./category/Category";
import Feature from "./fechar/Feature";
import EditUser from "./User/EditUser";
import Province from "./province/Province";
import District from "./district/District";
import User from "./User/User";
import Location from "./location/Location";
import List_Location from "./location/List_Location";
import Home from "./Home/Home";

class Router extends Component {

    render() {
        return (
            <Switch >
                <Route path = '/' exact component = { Home }/>
                <Route path = '/category' component = { Category }/>
                <Route path = '/feature' component = { Feature }/>
                <Route path = '/province'  component = { Province } />
                <Route path = '/district'  component = { District }/>
                <Route path = '/user' component = { User }/>
                <Route path = '/location'  component = { Location }/>
                <Route path = '/list_location' component = { List_Location }/>
            </Switch>
        );
    }
}


export default Router;