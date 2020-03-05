import React from 'react';
import './Board.scss';

import { PlayerPlaymate } from './layout/PlayerPlaymate';
import { CentralPlaymate } from './layout/CentralPlaymate';

export class Board extends React.Component {
    render() {
        return (
            <div className="Board">
                <div className="Board__content">
                    <div className="Board__players-playmate">
                        <PlayerPlaymate playerName="John"></PlayerPlaymate>
                        <PlayerPlaymate playerName="Arya"></PlayerPlaymate>
                        <PlayerPlaymate playerName="Bran"></PlayerPlaymate>
                        <PlayerPlaymate playerName="Robbie"></PlayerPlaymate>
                    </div>
                    <div className="Board__central-playmate">
                        <CentralPlaymate></CentralPlaymate>
                    </div>
                </div>
                <div className="Board__player-playmate">
                    <PlayerPlaymate isLocalPlayer="true" playerName="Arthur"></PlayerPlaymate>
                </div>
            </div>
        );
    }
}
