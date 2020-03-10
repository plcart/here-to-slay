import React from 'react';
import './CardPile.scss';

import { CardWrapper } from './CardWrapper';

export class CardPile extends React.Component {
    render() {
        return (
            <div className={`CardPile CardPile--${this.props.color}`} onClick={this.props.onCardDrawClick}>
                {this.props.cards.map(card =>
                    <div className="CardPile__card" key={card.id}>
                        <CardWrapper cardType={card.cardType}></CardWrapper>
                    </div>)}
            </div>
        );
    }
}