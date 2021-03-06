import {
  FetchShowsSuccessPayload,
  FetchShowsFailurePayload,
  FetchShowsFailure,
  FetchShowsRequest,
  FetchShowsSuccess,
  SelectShowPayload,
  SelectShow,
  DeselectShow,
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

export const selectShow = (payload: SelectShowPayload): SelectShow => ({
  type: ShowsTypes.SELECT_SHOW,
  payload,
});

export const deselectShow = (payload: SelectShowPayload): DeselectShow => ({
  type: ShowsTypes.DESELECT_SHOW,
  payload,
});
