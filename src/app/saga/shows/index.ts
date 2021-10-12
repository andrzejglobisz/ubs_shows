import axios, { AxiosResponse } from 'axios';
import { AnyAction } from 'redux';
import {
  all,
  AllEffect,
  call,
  ForkEffect,
  put,
  takeLatest,
} from 'redux-saga/effects';

import { fetchShowsFailure, fetchShowsSuccess } from '../../actions/shows';
import { SHOWS_ENDPOINT } from '../../constants/api';

import { Show } from '../../types/shows';

enum ShowsTypes {
  FETCH_SHOWS_REQUEST = 'FETCH_SHOWS_REQUEST',
  FETCH_SHOWS_SUCCESS = 'FETCH_SHOWS_SUCCESS',
  FETCH_SHOWS_FAILURE = 'FETCH_SHOWS_FAILURE',
}

const getShows = (query: string) =>
  axios.get<Show[]>(`${SHOWS_ENDPOINT}?q=${query}`);

function* fetchShowsSaga({ payload: query }: AnyAction) {
  console.log(query);
  try {
    const response: AxiosResponse<Show[]> = yield call(() => getShows(query));
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
