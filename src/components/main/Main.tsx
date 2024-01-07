import { useEffect, useState } from 'react';
import Page from '../../Page';
import Seach from '../search/Seach';
import { STORAGE_KEY } from '../../model/consts';
import { useSelector, useDispatch } from 'react-redux';
import { setSearch } from '../../redux/slices/stateSearchSlice';
import { RootState } from '../../redux/store';

export interface BeersArray {
  name: string;
  image_url: string;
  id: string;
}
export interface PageBeers {
  show: string;
  beer: BeersArray[];
  result: BeersArray[];
  loading: boolean;
  localData: string;
}

function Main() {
  const search = useSelector((state: RootState) => state.input.search);

  const dispatch = useDispatch();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearch(e.target.value));
  };

  const searchKey = `${STORAGE_KEY}`;

  const [, setShow] = useState<string>('index');
  const [beer, setBeer] = useState<BeersArray[]>([]);
  const [result, setResult] = useState<BeersArray[]>([]);
  const [, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const localData = localStorage.getItem(searchKey);
    const result = localData ? JSON.parse(localData) : [];
    if (localData) {
      setResult(result);
    }
  }, []);
  const enterHandler = (search: string): void => {
    if (search.trim() === '') return;
    setLoading(true);
    setShow('search');
    search = encodeURIComponent(search);

    const url = `https://api.punkapi.com/v2/beers?beer_name=${search}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setBeer(data);

        setLoading(false);
        localStorage.setItem(searchKey, JSON.stringify(data));
      });
  };
  const handleEnter = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      enterHandler(search);
    }
  };

  return (
    <>
      <Seach
        enterHandler={enterHandler}
        isActive={false}
        handleChange={handleChange}
        handleEnter={handleEnter}
        search={search}
      />
      <Page
        handleClickStyle={function (): void {
          throw new Error('Function not implemented.');
        }}
        isActive={false}
        searchName={beer}
        arrResult={result}
      />
    </>
  );
}
export default Main;
