import axios, { AxiosResponse } from 'axios';

import { SHOWS_ENDPOINT } from '../../constants/api';
import { Show } from '../../types/shows';

export const getShows = (query: string): Promise<AxiosResponse<Show[]>> =>
  axios.get<Show[]>(`${SHOWS_ENDPOINT}?q=${query}`);
