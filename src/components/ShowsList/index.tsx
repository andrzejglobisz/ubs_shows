import React from 'react';
import { selectShow } from '../../app/actions/shows';

import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { Show } from '../../app/types/shows';

import './index.scss';

export const ShowsList: React.FC = () => {
  const shows = useAppSelector((state) => state.shows.shows);
  const dispatch = useAppDispatch();

  const onSelectShow = (show: Show) => {
    dispatch(selectShow({ show }));
  };

  return (
    <ul className="shows-list">
      {shows.map((show) => (
        <li
          key={show.show.id}
          className="shows-list__element"
          onClick={() => onSelectShow(show)}
          title="Click to select show"
        >
          {show.show.name} ({show.show.status} {show.show.ended && ' '}
          {show.show.ended})
        </li>
      ))}
    </ul>
  );
};
