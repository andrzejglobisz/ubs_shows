import { ShowsTypes } from '../../actions/types';
import { ShowsActions, ShowsState } from '../../types/shows';

const initialState: ShowsState = {
  pending: false,
  shows: [],
  error: null,
};

export const showsReducer = (
  state = initialState,
  action: ShowsActions,
): ShowsState => {
  switch (action.type) {
    case ShowsTypes.FETCH_SHOWS_REQUEST:
      return {
        ...state,
        pending: true,
      };
    case ShowsTypes.FETCH_SHOWS_SUCCESS:
      return {
        ...state,
        pending: false,
        shows: action.payload.shows,
        error: null,
      };
    case ShowsTypes.FETCH_SHOWS_FAILURE:
      return {
        ...state,
        pending: false,
        shows: [],
        error: action.payload.error,
      };
    default:
      return {
        ...state,
      };
  }
};
