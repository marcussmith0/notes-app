import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ButtonDropDown extends Component {
    renderDropDown() { 
        return (
            <div>
                <ul id='dropdown1' className='dropdown-content'>
                    <li><Link to="/new/simplenote">Simple</Link></li>
                    <li><a>Cornel</a></li>
                    <li><a>Two Column</a></li>
                    <li><a>Outline</a></li>
                </ul>
            </div>
        );
    }

    render() {
        return (
            <div>     
                <a className='dropdown-button btn' data-activates='dropdown1'>
                    <i className="material-icons left">add</i>
                    New Notes
                </a>   
                {this.renderDropDown()}
            </div>
        );
    }
}

export default ButtonDropDown;