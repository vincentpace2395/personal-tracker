import React from 'react';
import Header from './Component/Header';
import HomePage from "./Component/Home/HomePage";
import FinancePage from "./Component/Finance/FinancePage";
import Calendar from "./Component/Calendar/Calendar";
import LiftingPage from "./Component/Lifting/Lifting";
import history from './history'

import {Router, Route, Switch} from 'react-router-dom';

import './App.css';

const App = () => {
    return (
        <div className='ui-container'>
            <Header />
            <Router history={history}>
                <Switch>
                    <Route path='/' exact component={HomePage} />
                    <Route path='/finance' exact component={FinancePage} />
                    <Route path='/calendar' exact component={Calendar} />
                    <Route path='/lifting' exact component={LiftingPage} />
                </Switch>
            </Router>
        </div>
    )
};

//
// const App = () => {
//     return (
//         <div className="ui-container">
//
//         </div>
//     );
// };

export default App;

