import React from 'react';
import './PlayerPlaymate.scss';

import { CardWrapper } from './CardWrapper';
import { PartyLeaderCard } from '../card/PartyLeaderCard';

export class PlayerPlaymate extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            expanded: false
        };
    }

    render() {
        return (
            <div className={`PlayerPlaymate ${this.state.expanded ? 'PlayerPlaymate--expanded' : ''} PlayerPlaymate--${this.props.isLocalPlayer ? 'local' : 'remote'}`}>
                <div className={`PlayerPlaymate__party-leader-container`} >
                    <CardWrapper cardType="leader" flip="true">
                        <PartyLeaderCard type={this.props.partyLeader}></PartyLeaderCard>
                    </CardWrapper>
                </div>
                <div className="PlayerPlaymate__heroes-container">
                    <div className="PlayerPlaymate__hero-container">
                        <CardWrapper cardType="default">

                        </CardWrapper>
                    </div>
                    <div className="PlayerPlaymate__hero-container">
                        <CardWrapper cardType="default">

                        </CardWrapper>
                    </div>
                    <div className="PlayerPlaymate__hero-container">
                        <CardWrapper cardType="default">

                        </CardWrapper>
                    </div>

                </div>
            </div>
        );
    }
}