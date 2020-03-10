import React from 'react';
import './Board.scss';

import { PlayerPlaymate } from './layout/PlayerPlaymate';
import CentralPlaymate from './layout/CentralPlaymate';
import { PlayerHand } from './layout/PlayerHand';
import { connect } from 'react-redux';
import { getLocalPlayer } from '../store/selectors';

class Board extends React.Component {
    render() {
        return (
            <div className="Board">
                <div className="Board__content">
                    <div className="Board__players-playmate">
                        {/* <PlayerPlaymate playerName="John" partyLeader="thief"></PlayerPlaymate>
                        <PlayerPlaymate playerName="Arya" partyLeader="wizard"></PlayerPlaymate>
                        <PlayerPlaymate playerName="Bran" partyLeader="bard"></PlayerPlaymate>
                        <PlayerPlaymate playerName="Robbie" partyLeader="fighter"></PlayerPlaymate>
                        <PlayerPlaymate playerName="Robbie" partyLeader="ranger"></PlayerPlaymate> */}
                    </div>
                    <div className="Board__central-playmate">
                        <CentralPlaymate></CentralPlaymate>
                    </div>
                </div>
                <div className="Board__player-playmate">
                    <PlayerPlaymate isLocalPlayer="true" playerName={this.props.localPlayer.name} partyLeader={this.props.localPlayer.name}></PlayerPlaymate>
                    {/* <div className="Board__player-hand-container">
                        <PlayerHand></PlayerHand>
                    </div> */}
                </div>
            </div >
        );
    }
}

const mapStateToProps = state => {
    const localPlayer = getLocalPlayer(state);
    return {
        localPlayer
    };
};

export default connect(mapStateToProps, null)(Board);