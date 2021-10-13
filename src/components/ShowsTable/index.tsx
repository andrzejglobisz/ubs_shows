import React from 'react';
import { deselectShow } from '../../app/actions/shows';

import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { Show } from '../../app/types/shows';

import './index.scss';

export const ShowsTable: React.FC = () => {
  const shows = useAppSelector((state) => state.shows.selected);
  const dispatch = useAppDispatch();

  const removeShow = (show: Show) => {
    dispatch(deselectShow({ show }));
  };

  return (
    <div className="shows-table">
      <table>
        <th>Selected Shows</th>
        {shows.map((show) => (
          <tr
            key={show.show.id}
            className="shows-table__row"
            onClick={() => removeShow(show)}
            title="Click to remove from the table"
          >
            <td>
              {show.show.name} ({show.show.status}
              {show.show.ended && ' '}
              {show.show.ended})
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};
