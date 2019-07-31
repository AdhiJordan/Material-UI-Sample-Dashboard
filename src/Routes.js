import React, {Component} from 'react';
import { Route  } from 'react-router';
import { BrowserRouter, Switch, HashRouter } from 'react-router-dom';
import Home from './App.js';
import List from './List';
import LifeCycle from './LifeCycle';

export default class Routes extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path='/admin' component={LifeCycle} />
                </Switch>
            </BrowserRouter>
        );
    }
}
