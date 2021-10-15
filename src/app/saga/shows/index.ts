import { AxiosResponse } from 'axios';
import { AnyAction } from 'redux';
import {
  all,
  AllEffect,
  call,
  ForkEffect,
  put,
  StrictEffect,
  takeLatest,
} from 'redux-saga/effects';

import { getShows } from '../../api';
import { fetchShowsFailure, fetchShowsSuccess } from '../../actions/shows';

import { Show } from '../../types/shows';

enum ShowsTypes {
  FETCH_SHOWS_REQUEST = 'FETCH_SHOWS_REQUEST',
  FETCH_SHOWS_SUCCESS = 'FETCH_SHOWS_SUCCESS',
  FETCH_SHOWS_FAILURE = 'FETCH_SHOWS_FAILURE',
}

export type FetchShowsSaga = Generator<
  StrictEffect,
  void,
  AxiosResponse<Show[]>
>;

export function* fetchShowsSaga({ payload: query }: AnyAction): FetchShowsSaga {
  try {
    const response: AxiosResponse<Show[]> = yield call(getShows, query);
    yield put(
      fetchShowsSuccess({
        shows: response.data,
      }),
    );
  } catch (e) {
    yield put(
      fetchShowsFailure({
        error: `${e}`,
      }),
    );
  }
}

function* showsSaga(): Generator<AllEffect<ForkEffect<never>>, void, unknown> {
  yield all([takeLatest(ShowsTypes.FETCH_SHOWS_REQUEST, fetchShowsSaga)]);
}

export default showsSaga;
