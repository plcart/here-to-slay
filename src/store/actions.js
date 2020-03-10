
export const drawMonster = () => ({
    type: 'DRAW_MONSTER'
});

export const slayMonster = id => ({
    type: 'SLAY_MONSTER',
    payload: {
        id
    }
});