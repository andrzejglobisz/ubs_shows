import axios from 'axios';

import { getShows } from '.';
import { SHOWS_ENDPOINT } from '../../constants/api';
import { mockedShows } from '../../mocks/store';

jest.mock('axios');

describe('getShows', () => {
  test('should fetch list of shows', async () => {
    const mockGetListener = jest.spyOn(axios, 'get');
    mockGetListener.mockImplementation(() => Promise.resolve(mockedShows));

    const shows = await getShows('test');

    expect(axios.get).toHaveBeenCalledWith(`${SHOWS_ENDPOINT}?q=test`);
    expect(shows).toEqual(mockedShows);
  });
});
