import React from 'react';
import './PlayerHand.scss';

import { CardWrapper } from './CardWrapper';

export class PlayerHand extends React.Component {
    render() {
        return (
            <div className="PlayerHand">
                <div className="PlayerHand__card">
                    <CardWrapper cardType="default"></CardWrapper>
                </div>
                <div className="PlayerHand__card">
                    <CardWrapper cardType="default"></CardWrapper>
                </div>
                <div className="PlayerHand__card">
                    <CardWrapper cardType="default"></CardWrapper>
                </div>
                <div className="PlayerHand__card">
                    <CardWrapper cardType="default"></CardWrapper>
                </div>
                <div className="PlayerHand__card">
                    <CardWrapper cardType="default"></CardWrapper>
                </div>
                <div className="PlayerHand__card">
                    <CardWrapper cardType="default"></CardWrapper>
                </div>
                <div className="PlayerHand__card">
                    <CardWrapper cardType="default"></CardWrapper>
                </div>
                <div className="PlayerHand__card">
                    <CardWrapper cardType="default"></CardWrapper>
                </div>
                <div className="PlayerHand__card">
                    <CardWrapper cardType="default"></CardWrapper>
                </div>
                <div className="PlayerHand__card">
                    <CardWrapper cardType="default"></CardWrapper>
                </div>
                <div className="PlayerHand__card">
                    <CardWrapper cardType="default"></CardWrapper>
                </div>
            </div>
        );
    }
}