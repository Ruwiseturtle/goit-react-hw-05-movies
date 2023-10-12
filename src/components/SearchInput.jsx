import { Input } from "./SearchInput.styled";
import { useSearchParams } from 'react-router-dom';

export const SearchInput = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const movieName = searchParams.get('movieName') ?? '';

  //ф-ція спрацьовує при кожній зміні в input
  const updateSearchText = e => {
    const sText = e.target.value;
    if (sText === '') {
      return setSearchParams({});
    }

    setSearchParams({ movieName: sText });
  };

  return (
    <div>
      <Input type="text" value={movieName} onChange={updateSearchText} />
    </div>
  );
};