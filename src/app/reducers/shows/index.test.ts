import { showsReducer } from '.';
import { ShowsTypes } from '../../actions/types';
import { mockedShows, mockedShowsState } from '../../mocks/store';

describe('shows reducers', () => {
  test('should handle FETCH_SHOWS_REQUEST', () => {
    const state = showsReducer(undefined, {
      type: ShowsTypes.FETCH_SHOWS_REQUEST,
      payload: 'test',
    });

    expect(state.pending).toBeTruthy();
  });

  test('should handle FETCH_SHOWS_SUCCESS', () => {
    const state = showsReducer(undefined, {
      type: ShowsTypes.FETCH_SHOWS_SUCCESS,
      payload: { shows: mockedShows },
    });

    expect(state.pending).toBeFalsy();
    expect(state.shows).toHaveLength(3);
  });

  test('should handle FETCH_SHOWS_FAILURE', () => {
    const state = showsReducer(undefined, {
      type: ShowsTypes.FETCH_SHOWS_FAILURE,
      payload: { error: 'error' },
    });

    expect(state.error).toBeTruthy();
    expect(state.pending).toBeFalsy();
    expect(state.shows).toHaveLength(0);
  });

  test('should handle SELECT_SHOW', () => {
    const stateAfterFirstSelect = showsReducer(undefined, {
      type: ShowsTypes.SELECT_SHOW,
      payload: { show: mockedShows[0] },
    });

    expect(stateAfterFirstSelect.selected).toHaveLength(1);

    const stateAfterOneSelect = showsReducer(stateAfterFirstSelect, {
      type: ShowsTypes.SELECT_SHOW,
      payload: { show: mockedShows[0] },
    });

    expect(stateAfterOneSelect.selected).toHaveLength(1);
  });

  test('should handle DESELECT_SHOW', () => {
    const state = showsReducer(
      { ...mockedShowsState, selected: mockedShows },
      {
        type: ShowsTypes.DESELECT_SHOW,
        payload: { show: mockedShows[0] },
      },
    );

    expect(state.selected).toHaveLength(mockedShows.length - 1);
  });
});
