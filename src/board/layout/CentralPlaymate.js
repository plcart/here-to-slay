import React from 'react';
import './CentralPlaymate.scss';

import { CardWrapper } from './CardWrapper';
import { CardPile } from './CardPile';

export class CentralPlaymate extends React.Component {
    render() {
        return (
            <div className="CentralPlaymate">
                <div className="CentralPlaymate__monsters-container">
                    <div className="CentralPlaymate__monster-container">
                        <CardWrapper></CardWrapper>
                    </div>
                    <div className="CentralPlaymate__monster-container">
                        <CardWrapper></CardWrapper>
                    </div>
                    <div className="CentralPlaymate__monster-container">
                        <CardWrapper></CardWrapper>
                    </div>
                </div>
                <div className="CentralPlaymate__card-pile-container">
                    <div className="CentralPlaymate__monster-pile-container">
                        <CardPile></CardPile>
                    </div>
                    <div className="CentralPlaymate__card-pile-container">
                        <div className="CentralPlaymate__discard-pile-container">
                            <CardPile></CardPile>
                        </div>
                        <div className="CentralPlaymate__draw-pile-container">
                            <CardPile></CardPile>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}