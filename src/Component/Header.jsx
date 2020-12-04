import React from 'react';
import './Header.css';

class Header extends React.Component {

    render() {
        return (
            <div className='header'>
                <button>Home</button>
                <button>Finance</button>
                <button>Calendar</button>
                <button>Gym</button>
            </div>
        );
    };
};

export default Header;