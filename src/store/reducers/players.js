const initialState = {
    byIds: {
        1: {
            name: 'Arthur',
            partyLeaderId: 1
        }
    },
    currentPlayerId: 1,
    players: [1],
    currentPlayerTurnId: 1,
    partyLeadersById: {
        1: {
            key: 'l1',
            name: 'The Charismatic Song',
            image: 'assets/party-leaders/the-charismatic-song.png',
            cardType: 'leader',
            type: 'bard',
            text: 'Each time you roll to use a Hero\'s effect, +1 to your roll.'
        },
        2: {
            key: 'l2',
            name: 'The Cloaked Sage',
            image: 'assets/party-leaders/the-cloaked-sage.png',
            cardType: 'leader',
            type: 'wizard',
            text: 'Each time you play a Magic card, DRAW a card.'
        },
        3: {
            key: 'l3',
            name: 'The Divine Arrow',
            image: 'assets/party-leaders/the-divine-arrow.png',
            cardType: 'leader',
            type: 'ranger',
            text: 'Each time you roll to ATTACK, +1 to your roll.'
        },
        4: {
            key: 'l4',
            name: 'The Fist of Reason',
            image: 'assets/party-leaders/the-fist-of-reason.png',
            cardType: 'leader',
            type: 'fighter',
            text: 'Each time you roll to CHALLENGE, +2 to your roll.'
        },
        5: {
            key: 'l5',
            name: 'The Protecting Horn',
            image: 'assets/party-leaders/the-protecting-horn.png',
            cardType: 'leader',
            type: 'guardian',
            text: 'Each time you play a Modifier card, +1 or -1 to that roll.'
        },
        6: {
            key: 'l6',
            name: 'The Shadow Claw',
            image: 'assets/party-leaders/the-shadow-claw.png',
            cardType: 'leader',
            type: 'thief',
            text: 'Once per turn on your turn, you may spend 1 action point to pull a card from another player\'s hand.'
        }
    },
    partyLeaders: [1, 2, 3, 4, 5, 6]
}

export default function (state = initialState, action) {
    switch (action.type) {
        default:
            return state;
    }
}
