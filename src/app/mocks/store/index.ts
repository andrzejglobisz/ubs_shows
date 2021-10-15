import { Show, ShowsState } from '../../types/shows';

export const mockedShows: Show[] = [
  {
    score: 0.8721452,
    show: {
      id: 14842,
      name: 'W',
      status: 'Ended',
      ended: '2016-09-14',
    },
  },
  {
    score: 0.6629735,
    show: {
      id: 10776,
      name: 'Dimension W',
      status: 'Ended',
      ended: '2016-03-27',
    },
  },
  {
    score: 0.5408423,
    show: {
      id: 57653,
      name: 'W Series: Driven',
      status: 'Running',
      ended: null,
    },
  },
];

export const mockedShowsState: ShowsState = {
  pending: false,
  shows: mockedShows,
  selected: [],
  error: null,
};
