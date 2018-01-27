import React from 'react';

import './cards.css';

export function CardBlue(props) {
    return (
        <div className="CardBlue">
            <h5>{props.titleCard}</h5>
            <p>{props.descCard}</p>
        </div>
    );
}

export function CardOrange(props) {
    return (
        <div className="CardOrange">
            <h5>{props.titleCard}</h5>
            <p>{props.descCard}</p>
        </div>
    );
}

export function CardPurple(props) {
    return (
        <div className="CardPurple">
            <h5>{props.titleCard}</h5>
            <p>{props.descCard}</p>
        </div>
    );
}

export function CardBlueDark(props) {
    return (
        <div className="CardBlueDark">
            <h5>{props.titleCard}</h5>
            <p>{props.descCard}</p>
        </div>
    );
}