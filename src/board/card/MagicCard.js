import React from 'react';

import './MagicCard.scss';

export default class extends React.Component {
    render() {
        return (
            <div className="MagicCard">
                <span className="MagicCard__name">{this.props.card.name}</span>
                <span className="MagicCard__type">Magic</span>
                <img className="MagicCard__image" src={this.props.card.image} alt={`${this.props.card.name} magic card`}></img>
                <span className="MagicCard__text">{this.props.card.text}</span>
            </div>
        );
    }
}
