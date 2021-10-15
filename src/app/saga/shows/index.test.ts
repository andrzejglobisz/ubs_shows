import { expectSaga } from 'redux-saga-test-plan';
import * as matchers from 'redux-saga-test-plan/matchers';
import { call } from 'redux-saga-test-plan/matchers';
import { throwError } from 'redux-saga-test-plan/providers';

import { fetchShowsSaga } from '.';
import { getShows } from '../../api';
import { ShowsTypes } from '../../actions/types';
import { mockedShowsState } from '../../mocks/store';

describe('fetchShowsSaga', () => {
  test('should fetch shows', async () => {
    return expectSaga(fetchShowsSaga, {
      type: ShowsTypes.FETCH_SHOWS_REQUEST,
      payload: 'test',
    })
      .provide([[call(getShows, 'test'), { data: mockedShowsState.shows }]])
      .put({
        type: ShowsTypes.FETCH_SHOWS_SUCCESS,
        payload: { shows: mockedShowsState.shows },
      })
      .run();
  });

  test('should handle error', async () => {
    return expectSaga(fetchShowsSaga, {
      type: ShowsTypes.FETCH_SHOWS_REQUEST,
      payload: 'test',
    })
      .provide([[matchers.call.fn(getShows), throwError()]])
      .put({
        type: ShowsTypes.FETCH_SHOWS_FAILURE,
        payload: { error: 'undefined' },
      })
      .run();
  });
});
