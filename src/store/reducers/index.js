import { combineReducers } from 'redux';
import monsters from './monsters';
import players from './players';

export default combineReducers({ monsters, players });