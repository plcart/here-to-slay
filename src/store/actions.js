
export const boardActionsEnum = {
    DRAW_MONSTER: 'DRAW_MONSTER',
    SLAY_MONSTER: 'SLAY_MONSTER',
    DRAW_CARD: 'DRAW_CARD',
    DISCARD_CARD: 'DISCARD_CARD'
}

export const drawMonster = () => ({
    type: boardActionsEnum.DRAW_MONSTER
});

export const slayMonster = id => ({
    type: boardActionsEnum.SLAY_MONSTER,
    payload: {
        id
    }
});

export const drawCard = (cardId, playerId) => ({
    type: boardActionsEnum.DRAW_CARD,
    payload: {
        cardId,
        playerId
    }
});

export const discardCard = (cardId, playerId) => ({
    type: boardActionsEnum.DISCARD_CARD,
    payload: {
        cardId,
        playerId
    }
});
