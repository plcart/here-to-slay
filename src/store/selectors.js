// Monsters

export const getMonstersState = store => store.monsters;

export const getMonsterById = (store, id) => getMonstersState(store) ?
    { ...getMonstersState(store).byIds[id], id } : {};

export const getAvailableMonsters = store => getMonstersState(store).availableIds.map(id => getMonsterById(store, id));

export const getMonstersDrawPile = store => getMonstersState(store).remainingIds.map(id => getMonsterById(store, id));

export const getSlayedMonsters = store => getMonstersState(store).slayedIds.map(id => getMonsterById(store, id));


// Players

export const getPlayersState = store => store.players;

export const getPartyLeaderById = (store, id) => getPlayersState(store) ?
    { ...getPlayersState(store).partyLeadersById[id], id } : {};

export const getPartyLeaders = store => getPlayersState(store).partyLeaders.map(id => getPartyLeaderById(store, id));

export const getPlayerById = (store, id) => {
    if (getPlayersState(store)) {
        let player = getPlayersState(store).byIds[id];
        return {
            ...player,
            id,
            partyLeader: getPartyLeaderById(store, player.partyLeaderId)
        }
    } else {
        return {};
    }
}

export const getPlayers = store => getPlayersState(store).players.map(id => getPlayerById(store, id));

export const getLocalPlayerId = store => getPlayersState(store).currentPlayerId;

export const getLocalPlayer = store => {
    const localPlayer = getPlayerById(store, getLocalPlayerId(store));
    return {
        ...localPlayer,
        cardsAtHand: localPlayer.cardsAtHand.map(id => getCardsById(store, id))
    };
};

export const getRemotePlayers = store => {
    const localPlayerId = getLocalPlayerId(store);
    return getPlayers(store).filter(player => player.id !== localPlayerId);
};


// Cards 

export const getCardsState = store => store.cards;

export const getCardsById = (store, id) => getCardsState(store) ? { ...getCardsState(store).byIds[id], id } : {};

export const getAvailableCardsPile = store => getCardsState(store).availableIds.map((key, id) => ({ id, cardType: 'default', key }));

