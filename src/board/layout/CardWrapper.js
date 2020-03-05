import React from 'react';
import './CardWrapper.scss';

export class CardWrapper extends React.Component {
    render() {
        return (
            <div className={`CardWrapper CardWrapper--face-down CardWrapper--${this.props.cardType}`} >
                {this.props.children}
            </div>
        )
    }
}