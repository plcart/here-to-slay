
export const getMonstersState = store => store.monsters;

export const getMonsterById = (store, id) => getMonstersState(store) ?
    { ...getMonstersState(store).byIds[id], id } : {};

export const getAvailableMonsters = store => getMonstersState(store).availableIds.map(id => getMonsterById(store, id));

export const getMonstersDrawPile = store => getMonstersState(store).remainingIds.map(id => getMonsterById(store, id));

export const getSlayedMonsters = store => getMonstersState(store).slayedIds.map(id => getMonsterById(store, id));