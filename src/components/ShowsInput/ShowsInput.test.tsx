import { act, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

import { ShowsInput } from '.';
import { mockedShowsState } from '../../app/mocks/store';
import { ShowsTypes } from '../../app/actions/types';

const mockStore = configureStore();

const mockedStore = mockStore({
  shows: mockedShowsState,
});

const TestComponent = () => (
  <Provider store={mockedStore}>
    <ShowsInput />
  </Provider>
);

describe('ShowsInput', () => {
  test('renders form component', () => {
    render(<TestComponent />);

    expect(screen.getByText(/Search for shows/)).toBeInTheDocument();
  });

  test('handles searching for shows', async () => {
    act(() => {
      render(<TestComponent />);

      const inputElement = screen.getByRole('textbox');

      userEvent.type(inputElement, 'query');
    });

    const selectAction = mockedStore
      .getActions()
      .find((action) => action.type === ShowsTypes.FETCH_SHOWS_REQUEST);

    expect(selectAction.payload).toEqual('query');
  });
});
