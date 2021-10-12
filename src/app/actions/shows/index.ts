import {
  FetchShowsSuccessPayload,
  FetchShowsFailurePayload,
  FetchShowsFailure,
  FetchShowsRequest,
  FetchShowsSuccess,
} from '../../types/shows';
import { ShowsTypes } from '../types';

export const fetchShowsRequest = (payload: string): FetchShowsRequest => ({
  type: ShowsTypes.FETCH_SHOWS_REQUEST,
  payload,
});

export const fetchShowsSuccess = (
  payload: FetchShowsSuccessPayload,
): FetchShowsSuccess => ({
  type: ShowsTypes.FETCH_SHOWS_SUCCESS,
  payload,
});

export const fetchShowsFailure = (
  payload: FetchShowsFailurePayload,
): FetchShowsFailure => ({
  type: ShowsTypes.FETCH_SHOWS_FAILURE,
  payload,
});
