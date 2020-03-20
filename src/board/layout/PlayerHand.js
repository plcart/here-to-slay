import React from 'react';
import './PlayerHand.scss';

import { CardWrapper } from './CardWrapper';
import { ChallengeCard } from '../card/ChallengeCard';
import { ModifierCard } from '../card/ModifierCard';

export class PlayerHand extends React.Component {

    cardRender(card) {
        switch (card.cardType) {
            case 'challenge':
                return <ChallengeCard card={card}></ChallengeCard>
            case 'modifier':
                return <ModifierCard card={card}></ModifierCard>
            default:
                return <div></div>
        }
    }

    render() {
        return (
            <div className="PlayerHand">
                {this.props.cards.map((card, key) =>
                    <div className="PlayerHand__card" key={key}>
                        <CardWrapper cardType="default" faceUp={true}>{
                            this.cardRender(card)
                        }</CardWrapper>
                    </div>
                )}
            </div>
        );
    }
}