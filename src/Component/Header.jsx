import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css';
import { withRouter } from 'react-router-dom';
import history from '../history';

class Header extends React.Component {

    changeRoute = path => {
        this.props.history.push(path);
    };

    render() {
        return (
            <span className='header'>
                <span className='header-content'>
                    <button onClick={() => this.changeRoute('/')}>Home</button>
                    <button onClick={() => this.changeRoute('/finance')}>Finance</button>
                    <button onClick={() => this.changeRoute('/calendar')}>Calendar</button>
                    <button onClick={() => this.changeRoute('/lifting')}>Gym</button>
                    <button onClick={() => this.changeRoute('/sports')}>Sports</button>
                </span>
            </span>
        );
    };
};

export default withRouter(Header);