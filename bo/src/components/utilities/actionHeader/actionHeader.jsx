import React, { Component } from 'react';

import './actionHeader.css';

export class ActionHeaderBox extends Component {
    render() {
        return (
            <div className="actionHeaderBox">
                {this.props.children}
                <ActionHeader />
            </div>
        );
    }
}

export class ActionHeader extends Component {
    render() {
        return (
            <div className="actionHeader">
                <div id="btns">{this.props.children}</div>
            </div>
        );
    }
}