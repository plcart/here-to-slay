import React from 'react';
import './Board.scss';

import { PlayerPlaymate } from './layout/PlayerPlaymate';
import CentralPlaymate from './layout/CentralPlaymate';
import { PlayerHand } from './layout/PlayerHand';
import { connect } from 'react-redux';
import { getLocalPlayer, getRemotePlayers } from '../store/selectors';

class Board extends React.Component {
    render() {
        return (
            <div className="Board">
                <div className="Board__content">
                    <div className="Board__players-playmate">
                        {this.props.remotePlayers.map(player => <PlayerPlaymate key={player.id} playerName={player.name} partyLeader={player.partyLeader}></PlayerPlaymate>)}
                    </div>
                    <div className="Board__central-playmate">
                        <CentralPlaymate></CentralPlaymate>
                    </div>
                </div>
                <div className="Board__player-playmate">
                    <PlayerPlaymate isLocalPlayer="true" playerName={this.props.localPlayer.name} partyLeader={this.props.localPlayer.partyLeader}></PlayerPlaymate>
                    <div className="Board__player-hand-container">
                        <PlayerHand cards={this.props.localPlayer.cardsAtHand}></PlayerHand>
                    </div>
                </div>
            </div >
        );
    }
}

const mapStateToProps = state => {
    const localPlayer = getLocalPlayer(state);
    const remotePlayers = getRemotePlayers(state);
    console.log(localPlayer);
    return {
        localPlayer,
        remotePlayers
    };
};

export default connect(mapStateToProps, null)(Board);