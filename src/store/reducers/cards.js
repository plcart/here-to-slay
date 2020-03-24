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
        },
        7: {
            cardType: 'magic',
            key: 'c7',
            name: 'Destructive Spell',
            text: 'DISCARD a card, then DESTROY a Hero Card.',
            image: 'assets/magics/destructive-spell.png'
        },
        8: {
            cardType: 'magic',
            key: 'c8',
            name: 'Entangling Trap',
            text: 'DISCARD 2 Cards, then STEAL a Hero Card.',
            image: 'assets/magics/entangling-trap.png'
        },
        9: {
            cardType: 'magic',
            key: 'c9',
            name: 'Critical Boost',
            text: 'DRAW 3 cards and DISCARD a card.',
            image: 'assets/magics/critical-boost.png'
        },
        10: {
            cardType: 'magic',
            key: 'c10',
            name: 'Enchanted Spell',
            text: '+2 to all your rolls until the end of your turn.',
            image: 'assets/magics/enchanced-spell.png'
        },
        11: {
            cardType: 'magic',
            key: 'c11',
            name: 'Forced Exchange',
            text: 'Choose a player, STEAL a Hero card from that player\'s, then move a Hero card from your Party to that player\'s Party.',
            image: 'assets/magics/forced-exchange.png'
        },
        12: {
            cardType: 'magic',
            key: 'c12',
            name: 'Winds of Change',
            text: 'Return an Item card equipped to any player\'s Hero card to that player\'s hand, then DRAW a card.',
            image: 'assets/magics/winds-of-change.png'
        },
        13: {
            cardType: 'magic',
            key: 'c13',
            name: 'Forceful Winds',
            text: 'Return every equipped item card to its respective player\'s hand.',
            image: 'assets/magics/forceful-winds.png'
        },
        14: {
            cardType: 'magic',
            key: 'c14',
            name: 'Call to the Fallen',
            text: 'Search the discard pile for a Hero card and add it to your hand.',
            image: 'assets/magics/call-to-fallen.png'
        }

    },
    availableIds: [
        7, 7, 8, 8, 9, 9, 10, 10, 11, 12, 12, 13, 14,
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