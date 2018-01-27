import React, { Component } from 'react';

import './titles.css';

export class TitlesBox extends Component {
    render() {
        return (
            <div className="titlesBox">
                {this.props.children}
            </div>
        );
    }
}

export class TitlePrimario extends Component {
    render() {
        return (
            <div className="titlePrimario">
                <h3>{this.props.children}</h3>
            </div>
        );
    }
}

export class Subtitle extends Component {
    render() {
        return (
            <div className="subtitle">
                <h5>{this.props.children}</h5>
            </div>
        );
    }
}