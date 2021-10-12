import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { fetchShowsRequest } from '../../app/actions/shows';

export const ShowsInput: React.FC = () => {
  const dispatch = useDispatch();
  const [query, setQuery] = useState('');

  useEffect(() => {
    if (query) {
      dispatch(fetchShowsRequest(query));
    }
  }, [query]);

  const searchForShows = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  return (
    <form>
      Search for shows:
      <input type="text" onChange={searchForShows} />
    </form>
  );
};
