import React from 'react';

import './ChallengeCard.scss';

export class ChallengeCard extends React.Component {
    render() {
        return (
            <div className="ChallengeCard">
                <div className="ChallengeCard__title">Challenge</div>
                <img className="ChallengeCard__image" src={this.props.card.image} alt="Challenge card"></img>
                <div className="ChallengeCard__text">
                    {this.props.card.text}
                </div>
            </div>
        )
    }
}