import React from 'react';
import './PlayerHand.scss';

import { CardWrapper } from './CardWrapper';

export class PlayerHand extends React.Component {

    cardRender(card) {
        switch (card.cardType) {
            case 'challenge':
            default:
               return <div></div>
        }
    }

    render() {
        return (
            <div className="PlayerHand">
                {this.props.cards.map(card =>
                    <div className="PlayerHand__card">
                        <CardWrapper cardType="default" flip={true} >{
                            this.cardRender(card)
                        }</CardWrapper>
                    </div>
                )}
            </div>
        );
    }
}