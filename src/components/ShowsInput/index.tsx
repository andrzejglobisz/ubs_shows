export const ShowsInput: React.FC = () => {
  const searchForShows = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };

  return (
    <form>
      Search for shows:
      <input type="text" onChange={searchForShows} />
    </form>
  );
};
