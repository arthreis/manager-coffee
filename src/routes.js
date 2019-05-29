import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import UserForm from './pages/UserForm';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/coffee/create" component={UserForm} />
            <Route path="/coffee/edit/:id" component={UserForm} />
        </Switch>
    </BrowserRouter>
);

export default Routes;