import React from 'react';
import Header from './Component/Header';
import HomePage from "./Component/Home/HomePage";
import FinancePage from "./Component/Finance/FinancePage";
import CalendarPage from "./Component/Calendar/CalendarPage";
import LiftingPage from "./Component/Lifting/LiftingPage";
import SportsPage from "./Component/Sports/SportsPage";
import history from './history'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import './App.css';

const App = () => {
    return (
        <React.Fragment>
            <Router history={history}>
                <Header />
                <div className='ui-container'>
                    <Switch>
                        <Route path='/' exact component={HomePage} />
                        <Route path='/finance' exact component={FinancePage} />
                        <Route path='/calendar' exact component={CalendarPage} />
                        <Route path='/lifting' exact component={LiftingPage} />
                        <Route path='/sports' exact component={SportsPage} />
                    </Switch>
                </div>
            </Router>
        </React.Fragment>
    )
};

export default App;

