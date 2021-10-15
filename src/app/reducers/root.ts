import { combineReducers } from 'redux';
import { showsReducer } from './shows';

/* eslint-disable import/no-extraneous-dependencies */

export const rootReducer = combineReducers({
  shows: showsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
