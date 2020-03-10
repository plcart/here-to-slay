import React from 'react';
import './CentralPlaymate.scss';

import { getMonstersDrawPile, getAvailableMonsters } from '../../store/selectors';
import { drawMonster, slayMonster } from '../../store/actions'
import { connect } from 'react-redux';

import { CardWrapper } from './CardWrapper';
import { CardPile } from './CardPile';

import { MonsterCard } from '../card/MonsterCard';

class CentralPlaymate extends React.Component {

    monsterCardDraw = () => {
        if (!(this.props.monster1 && this.props.monster2 && this.props.monster3)) {
            this.props.drawMonster();
        }
    }

    slayMonster(id) {
        this.props.slayMonster(id);
    }

    render() {
        return (
            <div className="CentralPlaymate">
                <div className="CentralPlaymate__monsters-container">
                    {
                        this.props.monster1 &&
                        <div className="CentralPlaymate__monster-container" onClick={this.slayMonster.bind(this, this.props.monster1.id)}>
                            <CardWrapper cardType={this.props.monster1.cardType} flip="true" >
                                <MonsterCard monster={this.props.monster1}></MonsterCard>
                            </CardWrapper>
                        </div>
                    }
                    {
                        this.props.monster2 &&
                        <div className="CentralPlaymate__monster-container" onClick={this.slayMonster.bind(this, this.props.monster2.id)}>
                            <CardWrapper cardType={this.props.monster2.cardType} flip="true">
                                <MonsterCard monster={this.props.monster2}></MonsterCard>
                            </CardWrapper>
                        </div>
                    }
                    {
                        this.props.monster3 &&
                        <div className="CentralPlaymate__monster-container" onClick={this.slayMonster.bind(this, this.props.monster3.id)}>
                            <CardWrapper cardType={this.props.monster3.cardType} flip="true">
                                <MonsterCard monster={this.props.monster3}></MonsterCard>
                            </CardWrapper>
                        </div>
                    }
                </div>
                <div className="CentralPlaymate__card-pile-container">
                    <div className="CentralPlaymate__monster-pile-container">
                        <CardPile cards={this.props.drawPile} color="dark" onCardDrawClick={this.monsterCardDraw}></CardPile>
                    </div>
                    <div className="CentralPlaymate__card-pile-container">
                        {/* <div className="CentralPlaymate__discard-pile-container">
                            <CardPile cards={this.state.drawCards} color="light"></CardPile>
                        </div>
                        <div className="CentralPlaymate__draw-pile-container">
                            <CardPile cards={this.state.drawCards} color="light"></CardPile>
                        </div> */}
                    </div>

                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    const drawPile = getMonstersDrawPile(state);
    const [monster1, monster2, monster3] = getAvailableMonsters(state)
    return {
        drawPile,
        monster1,
        monster2,
        monster3
    }
};

export default connect(mapStateToProps, { drawMonster, slayMonster })(CentralPlaymate);