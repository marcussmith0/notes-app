import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class SimpleNote extends Component {
    onSubmit(values) {
        this.props.submitNote(values);
    }

    renderFields() {
        return (
            <div>
                <Field name="title" component="input" placeholder="Title" label="Title" style={{paddingLeft: 20}}/>
                <Field component="textarea" name="content" className="materialize-textarea" placeholder="Enter Good Shit" style={{height: 420, padding: 20}}/>
            </div>
        );
    }

    render() {
        return (
                <form onSubmit={this.props.handleSubmit(this.onSubmit.bind(this))}>
                    {this.renderFields()}
                    <Link to="/notes" className="waves-effect red btn">Cancel</Link>
                    <button type="submit" className="waves-effect green btn right">Save</button>
                </form>
        )
    }
}

export default reduxForm({
    form: "simplenote"
})(connect(null, actions)(SimpleNote));