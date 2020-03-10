import React from 'react';
import './TypeBadge.scss';

export class TypeBadge extends React.Component {
    render() {
        return (
            <span className={`TypeBadge TypeBadge--${this.props.type}`}></span>
        );
    }
} 