import React from 'react';
import { Switch, Route } from 'react-router-dom';

import CoffeeForm from './pages/CoffeeForm';
import CoffeeList from './pages/CoffeeList';
import Header from './components/Header';
import Footer from './components/Footer';

const Routes = () => (
    <>
        <Header />
        <Switch>
            <Route path="/" component={CoffeeList} exact/>
            <Route path="/coffee/create" component={CoffeeForm} />
            <Route path="/coffee/edit/:id" component={CoffeeForm} />
            <Route path="/coffee/list" component={CoffeeList} />
        </Switch>
        <Footer />
    </>
);

export default Routes;
