import { all, AllEffect, fork, ForkEffect } from 'redux-saga/effects';
import shows from './shows';

export function* rootSaga(): Generator<
  AllEffect<ForkEffect<void>>,
  void,
  unknown
> {
  yield all([fork(shows)]);
}
