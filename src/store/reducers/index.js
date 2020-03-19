import { combineReducers } from 'redux';
import monsters from './monsters';
import players from './players';
import cards from './cards';

export default combineReducers({ monsters, players, cards });