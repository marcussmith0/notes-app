import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import ButtonDropDown from './ButtonDropDown';

class Header extends Component {
    
    renderContent() {
        //this will render the header in the certain way based on if you are logged in or out
        switch(this.props.auth) {
            case null:
                return;
            case false:
                return [<li key={11}><Link to="/about">About</Link></li>,
                        <li key={12}><Link to="/signin">Sign In</Link></li>];
            default:
                return [<li key={1}><ButtonDropDown/></li>,
                        <li key={2}><a href="/api/logout">Sign out</a></li>];
        }
    }

    render() {
        const path = this.props.auth ? "/notes": "/";
        return (
            <nav>
                <div className="nav-wrapper">
                    <Link to={path} className="brand-logo">Note Port</Link>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        {this.renderContent()}
                    </ul>
                </div>
            </nav>
        );
    }
}

function mapStateToProps({ auth }) {
    return { auth }
}

export default connect(mapStateToProps)(Header);