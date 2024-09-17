import React from 'react';
import './App.css';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

import HomePage from './react-componoents/homePage';

class App extends React.Component {
    
    render() {
        return (
            <BrowserRouter>
                <Switch>
				<Route exact path={["/"]} render={props =>
                    (<HomePage {...props} app={this} />)} />  
                </Switch>
            </BrowserRouter>
        )
    }
}

export default App;
