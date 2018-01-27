import React, { Component } from 'react';

import './forms.css';

export class InputTextCustomizado extends Component {
    render() {
        return (
            <div className="input">
                <div className="group">
                    {/* <input type={this.props.type} id={this.props.id} required="valid" /> */}
                    <input type={this.props.type} id={this.props.id} required="valid" />
                    <label>{this.props.label}</label>
                    <div className="bar"></div>
                </div>
            </div>
        );
    }
}