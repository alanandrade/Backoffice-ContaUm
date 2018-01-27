import React, { Component } from 'react';

import './buttons.css';

export class BtnDefault extends Component {
    render() {
        return (
            <button className="BtnDefault">{this.props.children}</button>
        );
    }
}

export class BtnPrimary extends Component {
    render() {
        return (
            <button className="BtnPrimary">{this.props.children}</button>
        );
    }
}

export class BtnDanger extends Component {
    render() {
        return (
            <button className="BtnDanger">{this.props.children}</button>
        );
    }
}

export class BtnSecondary extends Component {
    render() {
        return (
            <button className="BtnSecondary">{this.props.children}</button>
        );
    }
}

export class BtnClean extends Component {
    render() {
        return (
            <button className="BtnClean">{this.props.children}</button>
        );
    }
}