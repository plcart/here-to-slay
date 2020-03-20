import React from 'react';

import './ModifierCard.scss';

export class ModifierCard extends React.Component {
    render() {
        return (
            <div className="ModifierCard">
                <div className="ModifierCard__title">Modifier</div>
                <img className="ModifierCard__image" src={this.props.card.image} alt="Modifier card"></img>
                <div className="ModifierCard__attributes">
                    {!!this.props.card.win && <span className="ModifierCard__attribute ModifierCard__attribute--add">+{this.props.card.win}</span>}
                    {!!this.props.card.win && !!this.props.card.lose && <span className="ModifierCard__attribute ModifierCard__attribute--divisor">/</span>}
                    {!!this.props.card.lose && <span className="ModifierCard__attribute ModifierCard__attribute--subtract">-{this.props.card.lose}</span>}
                </div>
                <div className="ModifierCard__text">
                    {this.props.card.text}
                </div>
            </div>
        )
    }
}