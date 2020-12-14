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





// <Navbar bg="light" expand="lg">
//     <Navbar.Brand className='tab' onClick={() => this.props.history.push('/')}>Home</Navbar.Brand>
//     <Navbar.Toggle aria-controls="basic-navbar-nav" />
//     <Navbar.Collapse className='justify-content-end' id="basic-navbar-nav">
//         <Nav>
//             <Nav.Link onClick={() => this.props.history.push('/finance')}>Finance</Nav.Link>
//             <Nav.Link onClick={() => this.props.history.push('/calendar')}>CalendarPage</Nav.Link>
//             <Nav.Link onClick={() => this.props.history.push('/lifting')}>Gym</Nav.Link>
//         </Nav>
//     </Navbar.Collapse>
// </Navbar>

