import React from 'react';
import './CardWrapper.scss';

export class CardWrapper extends React.Component {
    render() {
        return (
            <div className="CardWrapper CardWrapper--flip-face-down">
                {this.props.children}
            </div>
        )
    }
}