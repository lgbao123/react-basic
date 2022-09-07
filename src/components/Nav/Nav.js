import React from 'react';
import './Nav.scss';
import { NavLink } from 'react-router-dom';
class Nav extends React.Component {
    render() {
        return (
            <div className="topnav">
                <NavLink
                    className={(navData) => (navData.isActive ? 'active' : '')}
                    to="/"
                >
                    Home
                </NavLink>
                <NavLink
                    className={(navData) => (navData.isActive ? 'active' : '')}
                    to="/todo"
                >
                    Todo
                </NavLink>
            </div>
        );
    }
}
export default Nav;
