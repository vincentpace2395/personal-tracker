import React from 'react';
import {withRouter} from 'react-router-dom';
import history from '../../history';
import './Sports.css';
import Fantasy from "./Fantasy";

class SportsPage extends React.Component {

    state = {
        fantasyBtnClicked: false
    };

    changeRoute(path) {
        this.setState({
            fantasyBtnClicked: true
        }, () => {
            this.props.history.push(path);
        });
    };

    render() {
        return (
            <div className='sportspage-body'>
                <button className='fantasy-btn' onClick={() => this.changeRoute('/sports/fantasy')}>Fantasy</button>
                { this.state.fantasyBtnClicked ? <Fantasy /> : null}
            </div>
        );
    };
};

export default withRouter(SportsPage);