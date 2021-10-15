import { ShowsTypes } from '../../actions/types';
import { Show, ShowsActions, ShowsState } from '../../types/shows';

const initialState: ShowsState = {
  pending: false,
  shows: [],
  selected: [],
  error: null,
};

const addSelectedShow = (shows: Show[], selected: Show) =>
  shows.find((show: Show) => show.show.id === selected.show.id)
    ? shows
    : [...shows, selected];

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
    case ShowsTypes.SELECT_SHOW:
      return {
        ...state,
        selected: addSelectedShow(state.selected, action.payload.show),
      };
    case ShowsTypes.DESELECT_SHOW:
      return {
        ...state,
        selected: state.selected.filter(
          (show) => show.show.id !== action.payload.show.show.id,
        ),
      };
    default:
      return {
        ...state,
      };
  }
};
