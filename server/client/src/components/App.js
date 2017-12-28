import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import * as actions from '../actions';

import Header from './Header';
import SignIn from './SignIn';
import Landing from './Landing';
import Dashboard from './Dashboard';
import SimpleNote from './Notes/SimpleNote';

class App extends Component {
    componentDidMount() {
        this.props.fetchUser();
    }

    render() {
        return (
            <div>
                <BrowserRouter>
                <div className="container">
                    <Header />
                    <div>
                        <Route exact path="/" component={Landing} />
                        <Route exact path="/notes" component={Dashboard} />
                        <Route path="/signin" component={SignIn} />
                        <Route path="/new/simplenote" component={SimpleNote} />
                    </div>
                </div>
                </BrowserRouter>
            </div>
        )
    }
}

export default connect(null, actions)(App);