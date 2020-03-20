import { boardActionsEnum } from "../actions";

const initialState = {
    byIds: {
        1: {
            cardType: 'challenge',
            key: 'c1',
            text: 'You may play this card when another player attempts to play a Hero, Item, or Magic card. CHALLENGE that card.',
            image: 'assets/modifiers/challenge.png'
        },
        2: {
            cardType: 'modifier',
            key: 'c2',
            text: 'Play this card after any player (includind you) rolls the dice. -4 to that roll.',
            win: 0,
            lose: 4,
            image: 'assets/modifiers/modifier-minus-four.png'
        },
        3: {
            cardType: 'modifier',
            key: 'c3',
            text: 'Play this card after any player (includind you) rolls the dice. +4 to that roll.',
            win: 4,
            lose: 0,
            image: 'assets/modifiers/modifier-plus-four.png'
        },
        4: {
            cardType: 'modifier',
            key: 'c4',
            text: 'Play this card after any player (includind you) rolls the dice. +1 or -3 to that roll.',
            win: 1,
            lose: 3,
            image: 'assets/modifiers/modifier-minus-three.png'
        },
        5: {
            cardType: 'modifier',
            key: 'c5',
            text: 'Play this card after any player (includind you) rolls the dice. +3 or -1 to that roll.',
            win: 3,
            lose: 1,
            image: 'assets/modifiers/modifier-plus-three.png'
        },
        6: {
            cardType: 'modifier',
            key: 'c6',
            text: 'Play this card after any player (includind you) rolls the dice. +2 or -2 to that roll.',
            win: 2,
            lose: 2,
            image: 'assets/modifiers/modifier-two.png'
        }
    },
    availableIds: [
        1, 2, 3, 4, 5, 6, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        2, 2, 2, 3, 3, 3, 4, 4, 5,
        5, 5, 6, 6, 6, 6, 6, 6, 6, 6
    ]
};


export default function (state = initialState, action) {
    switch (action.type) {
        case boardActionsEnum.DRAW_CARD: {
            let availableIds = [...state.availableIds].slice(1);
            return {
                ...state,
                availableIds
            };
        }
        default:
            return state;
    }
}