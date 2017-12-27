import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Header extends Component {
    renderContent() {
        switch(this.props.auth) {
            case null:
                return
            case false:
                return [<li><Link to="/about">About</Link></li>,
                        <li><Link to="/signin">Sign In</Link></li>];
            default:
                return <li><a href="/api/logout">Sign out</a></li>;
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

function mapStateToProps({auth}) {
    return { auth }
}

export default connect(mapStateToProps)(Header);