import { act, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

import { ShowsList } from '.';
import { mockedShowsState } from '../../app/mocks/store';
import { ShowsTypes } from '../../app/actions/types';

const mockStore = configureStore();

const mockedStore = mockStore({
  shows: mockedShowsState,
});

const TestComponent = () => (
  <Provider store={mockedStore}>
    <ShowsList />
  </Provider>
);

const TestComponenLoading = () => (
  <Provider
    store={mockStore({
      shows: { mockedShowsState, pending: true },
    })}
  >
    <ShowsList />
  </Provider>
);

describe('ShowsList', () => {
  test('renders list of shows', () => {
    render(<TestComponent />);

    expect(screen.getByText(/Dimension W/)).toBeInTheDocument();
  });

  test('handles selecting show', () => {
    act(() => {
      render(<TestComponent />);

      const showElements = screen.getAllByTitle('Click to select show');

      userEvent.click(showElements[0]);
    });

    const selectAction = mockedStore
      .getActions()
      .find((action) => action.type === ShowsTypes.SELECT_SHOW);

    expect(selectAction.payload.show.show.name).toEqual(
      mockedShowsState.shows[0].show.name,
    );
  });

  test('renders loading indicator', () => {
    render(<TestComponenLoading />);

    expect(screen.getByText('Loading shows...')).toBeInTheDocument();
  });
});
