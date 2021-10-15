import { act, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

import { ShowsTable } from '.';
import { mockedShowsState } from '../../app/mocks/store';
import { ShowsTypes } from '../../app/actions/types';

const mockStore = configureStore();

const mockedStore = mockStore({
  shows: { ...mockedShowsState, selected: mockedShowsState.shows },
});

const TestComponent = () => (
  <Provider store={mockedStore}>
    <ShowsTable />
  </Provider>
);

describe('ShowsTable', () => {
  test('renders list of shows', () => {
    render(<TestComponent />);

    expect(screen.getByText(/Dimension W/)).toBeInTheDocument();
  });
  test('handles selecting show', () => {
    act(() => {
      render(<TestComponent />);

      const showElements = screen.getAllByTitle(
        'Click to remove from the table',
      );

      userEvent.click(showElements[0]);
    });

    const selectAction = mockedStore
      .getActions()
      .find((action) => action.type === ShowsTypes.DESELECT_SHOW);

    expect(selectAction.payload.show.show.name).toEqual(
      mockedShowsState.shows[0].show.name,
    );
  });
});
