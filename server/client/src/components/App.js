import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import * as actions from '../actions';

import Header from './Header';
import SignIn from './SignIn';
import Landing from './Landing';
const Dashboard = () => <h2>Dashboard</h2>
const NewNote = () => <h2>NoteNew</h2>

class App extends Component {
    componentDidMount() {
        this.props.fetchUser();
    }

    render() {
        return (
            <div className="container">
                <BrowserRouter>
                <div>
                    <Header />
                    <Route exact path="/" component={Landing} />
                    <Route exact path="/notes" component={Dashboard} />
                    <Route path="/signin" component={SignIn} />
                    <Route path="/new/note" component={NewNote} />
                </div>
                </BrowserRouter>
            </div>
        )
    }
}

export default connect(null, actions)(App);