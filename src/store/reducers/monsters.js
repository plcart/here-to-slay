
const initialState = {
    byIds: {
        1: {
            cardType: 'monster',
            key: 'm1',
            name: 'Anuram Caldron',
            image: 'assets/monsters/anuram-caldron.png',
            requirements: ['hero', 'hero', 'hero'],
            lose: {
                value: 6,
                text: 'SACRIFICE a Hero'
            },
            win: {
                value: 7,
                text: 'SLAY this Monster Card'
            },
            ability: {
                text: 'Each time you roll, +1 to your rolls.'
            }
        },
        2: {
            cardType: 'monster',
            key: 'm2',
            name: 'The Slime',
            image: 'assets/monsters/the-slime.png',
            requirements: ['hero', 'hero', 'hero', 'hero'],
            lose: {
                value: 7,
                text: 'SACRIFICE a Hero'
            },
            win: {
                value: 8,
                text: 'SLAY this Monster Card & DRAW 2 cards'
            },
            ability: {
                text: 'You may spend an extra action point on each of your turns.'
            }
        },
        3: {
            cardType: 'monster',
            key: 'm3',
            name: 'Corrupted Sabretooth',
            image: 'assets/monsters/corrupted-sabretooth.png',
            requirements: ['hero', 'hero', 'hero'],
            lose: {
                value: 6,
                text: 'SACRIFICE a Hero'
            },
            win: {
                value: 9,
                text: 'SLAY this Monster Card & DRAW a card'
            },
            ability: {
                text: 'Each time you would DESTORY a Hero card, you may STEAL that Hero card instead.'
            }
        },
        4: {
            cardType: 'monster',
            key: 'm4',
            name: 'Crowned Serpentine',
            image: 'assets/monsters/crowned-serpentine.png',
            requirements: ['hero', 'hero'],
            lose: {
                value: 7,
                text: 'SACRIFICE a Hero'
            },
            win: {
                value: 10,
                text: 'SLAY this Monster Card'
            },
            ability: {
                text: 'Each time any player (including you) plays a Modifier Card, DRAW a card.'
            }
        },
        5: {
            cardType: 'monster',
            key: 'm5',
            name: 'Malmammoth',
            image: 'assets/monsters/malmammoth.png',
            requirements: ['ranger', 'hero'],
            lose: {
                value: 4,
                text: 'DISCARD 2 cards'
            },
            win: {
                value: 8,
                text: 'SLAY this Monster Card'
            },
            ability: {
                text: 'Each time you DRAW an Item card, you may play it immediately.'
            }
        },
        6: {
            cardType: 'monster',
            key: 'm6',
            name: 'Warworn Owlbear',
            image: 'assets/monsters/warworn-owlbear.png',
            requirements: ['thief', 'hero'],
            lose: {
                value: 4,
                text: 'DISCARD 2 cards'
            },
            win: {
                value: 8,
                text: 'SLAY this Monster Card'
            },
            ability: {
                text: 'Item cards you play cannot be challenged.'
            }
        },
        7: {
            cardType: 'monster',
            key: 'm7',
            name: 'Titan Wyvern',
            image: 'assets/monsters/titan-wyvern.png',
            requirements: ['fighter', 'hero'],
            lose: {
                value: 4,
                text: 'DISCARD 2 cards'
            },
            win: {
                value: 8,
                text: 'SLAY this Monster Card'
            },
            ability: {
                text: 'Each time you roll for a challenge card, +1 to your roll.'
            }
        },
        8: {
            cardType: 'monster',
            key: 'm8',
            name: 'Artic Aries',
            image: 'assets/monsters/artic-aries.png',
            requirements: ['hero'],
            lose: {
                value: 6,
                text: 'DISCARD 2 cards'
            },
            win: {
                value: 8,
                text: 'SLAY this Monster Card'
            },
            ability: {
                text: 'Each time you successfully roll to use a Hero card\'s effect, DRAW a card.'
            }
        }
    },
    availableIds: [],
    slayedIds: [],
    remainingIds: [1, 2, 3, 4, 5, 6, 7, 8]
}

export default function (state = initialState, action) {
    switch (action.type) {
        case 'DRAW_MONSTER': {
            let remainingIds = [...state.remainingIds]
            let availableIds = [...state.availableIds];
            let newCard = remainingIds.shift();
            if (newCard) {
                availableIds.push(newCard);
            }
            return {
                ...state,
                availableIds,
                remainingIds
            };
        }
        case 'SLAY_MONSTER': {
            let availableIds = [...state.availableIds];
            let slayedIds = [...state.slayedIds, ...availableIds.splice(availableIds.findIndex(id => id === action.payload.id), 1)];
            return {
                ...state,
                availableIds,
                slayedIds
            }
        }
        default: {
            return state;
        }
    }
}