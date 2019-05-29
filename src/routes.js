import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import CoffeeForm from './pages/CoffeeForm';
import CoffeeList from './pages/CoffeeList';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/coffee/create" component={CoffeeForm} />
            <Route path="/coffee/edit/:id" component={CoffeeForm} />
            <Route path="/coffee/list" component={CoffeeList} />
        </Switch>
    </BrowserRouter>
);

export default Routes;