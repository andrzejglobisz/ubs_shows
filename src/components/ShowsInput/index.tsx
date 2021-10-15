import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { fetchShowsRequest } from '../../app/actions/shows';

import './index.scss';

export const ShowsInput: React.FC = () => {
  const dispatch = useDispatch();
  const [query, setQuery] = useState<string>();

  useEffect(() => {
    if (query !== undefined) {
      dispatch(fetchShowsRequest(query));
    }
  }, [query]);

  const searchForShows = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  return (
    <form className="shows-form">
      Search for shows <input type="text" onChange={searchForShows} />
    </form>
  );
};
