import { ShowsTypes } from '../../actions/types';

export interface Show {
  score: number;
  show: ShowDetail;
}
export interface ShowDetail {
  name: string;
  id: number;
}

export interface ShowsState {
  pending: boolean;
  shows: Show[];
  error: string | null;
}

export interface FetchShowsSuccessPayload {
  shows: Show[];
}

export interface FetchShowsFailurePayload {
  error: string;
}

export interface FetchShowsRequest {
  type: typeof ShowsTypes.FETCH_SHOWS_REQUEST;
  payload: string;
}

export type FetchShowsSuccess = {
  type: typeof ShowsTypes.FETCH_SHOWS_SUCCESS;
  payload: FetchShowsSuccessPayload;
};

export type FetchShowsFailure = {
  type: typeof ShowsTypes.FETCH_SHOWS_FAILURE;
  payload: FetchShowsFailurePayload;
};

export type ShowsActions =
  | FetchShowsRequest
  | FetchShowsSuccess
  | FetchShowsFailure;
