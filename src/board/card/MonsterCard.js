import React from 'react';
import './MonsterCard.scss';

import { TypeBadge } from './TypeBadge';
import { DrawRequirement } from './DrawRequirement';

export class MonsterCard extends React.Component {
    render() {
        return (
            <div className="MonsterCard">
                <img src={this.props.monster.image} alt={`${this.props.monster.name} monster card`} className="MonsterCard__image"></img>
                <div className="MonsterCard__requirements">
                    <span className="MonsterCard__requirement">requirement:</span>
                    {this.props.monster.requirements.map((type, id) => <TypeBadge key={id} type={type}></TypeBadge>)}
                </div>
                <div className="MonsterCard__draw-requirements">
                    <DrawRequirement color="red" value={`${this.props.monster.lose.value}-`} text={this.props.monster.lose.text}></DrawRequirement>
                    <DrawRequirement color="green" value={`${this.props.monster.win.value}+`} text={this.props.monster.win.text}></DrawRequirement>
                </div>
                <div className="MonsterCard__ability">
                    {this.props.monster.ability.text}
                </div>
            </div>
        );
    }
}