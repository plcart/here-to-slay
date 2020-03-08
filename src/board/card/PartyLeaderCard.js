import React from 'react';
import './PartyLeaderCard.scss';

export class PartyLeaderCard extends React.Component {
    render() {
        return (
            <div className={`PartyLeaderCard PartyLeaderCard--${this.props.type}`}>

            </div>
        );
    }
}