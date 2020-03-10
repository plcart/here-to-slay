import React from 'react';
import './DrawRequirement.scss'

export class DrawRequirement extends React.Component {
    render() {
        return (
            <div className={`DrawRequirement DrawRequirement--${this.props.color}`}>
                <span className="DrawRequirement__value">
                    {this.props.value}
                </span>
                <span className="DrawRequirement__text">
                    {this.props.text}
                </span>
            </div>
        );
    }
}