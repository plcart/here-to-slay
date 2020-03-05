import React from 'react';
import './HeroCard.scss';

export class HeroCard extends React.Component {
    constructor(props) {
        super()
    }

    render() {
        return (
            <div className={`HeroCard HeroCard--${this.props.type}`}>
                <div className="HeroCard__container">
                    <span className="HeroCard__name">
                        {this.props.name}
                    </span>
                    <span className="HeroCard__type">
                        Hero: {this.props.type}
                    </span>
                    <div className="HeroCard__attributes">
                        <span className="HeroCard__requirement">{this.props.requirement}</span>
                        <span className="HeroCard__description">{this.props.description}</span>
                    </div>
                </div>
            </div>
        );
    }
}