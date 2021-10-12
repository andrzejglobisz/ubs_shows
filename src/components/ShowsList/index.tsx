import React from 'react';
import { useAppSelector } from '../../app/hooks';

export const ShowsList: React.FC = () => {
  const shows = useAppSelector((state) => state.shows.shows);
  return (
    <ul>
      {shows.map((show) => (
        <li key={show.show.id}>{show.show.name}</li>
      ))}
    </ul>
  );
};
