import React from 'react';
import './PartyLeaderCard.scss';

import { TypeBadge } from './TypeBadge';

export class PartyLeaderCard extends React.Component {
    render() {
        return (
            <div className={`PartyLeaderCard PartyLeaderCard--${this.props.leader.type}`}>
                <img className="PartyLeaderCard__image" src={this.props.leader.image} alt={`${this.props.leader.name} party leader.`}></img>
                <div className="PartyLeaderCard__type-badge">
                    <TypeBadge type={this.props.leader.type}></TypeBadge>
                </div>
                <div className="PartyLeaderCard__ability-description">
                    {this.props.leader.text}
                </div>
            </div>
        );
    }
}