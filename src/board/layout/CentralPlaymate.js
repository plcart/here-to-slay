import React from 'react';
import './CentralPlaymate.scss';

import { CardWrapper } from './CardWrapper';
import { CardPile } from './CardPile';

export class CentralPlaymate extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            monsterCards: [
                { cardType: 'monster' },
                { cardType: 'monster' },
                { cardType: 'monster' },
                { cardType: 'monster' },
                { cardType: 'monster' },
                { cardType: 'monster' },
                { cardType: 'monster' },
                { cardType: 'monster' },
                { cardType: 'monster' },
                { cardType: 'monster' },
                { cardType: 'monster' }
            ],
            drawCards: [
                { cardType: 'default' },
                { cardType: 'default' },
                { cardType: 'default' },
                { cardType: 'default' },
                { cardType: 'default' },
                { cardType: 'default' },
                { cardType: 'default' },
                { cardType: 'default' },
                { cardType: 'default' },
                { cardType: 'default' },
                { cardType: 'default' }
            ]
        };

    }

    render() {
        return (
            <div className="CentralPlaymate">
                <div className="CentralPlaymate__monsters-container">
                    <div className="CentralPlaymate__monster-container">
                        <CardWrapper cardType="monster"></CardWrapper>
                    </div>
                    <div className="CentralPlaymate__monster-container">
                        <CardWrapper cardType="monster"></CardWrapper>
                    </div>
                    <div className="CentralPlaymate__monster-container">
                        <CardWrapper cardType="monster"></CardWrapper>
                    </div>
                </div>
                <div className="CentralPlaymate__card-pile-container">
                    <div className="CentralPlaymate__monster-pile-container">
                        <CardPile cards={this.state.monsterCards} color="dark"></CardPile>
                    </div>
                    <div className="CentralPlaymate__card-pile-container">
                        <div className="CentralPlaymate__discard-pile-container">
                            <CardPile cards={this.state.drawCards} color="light"></CardPile>
                        </div>
                        <div className="CentralPlaymate__draw-pile-container">
                            <CardPile cards={this.state.drawCards} color="light"></CardPile>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}