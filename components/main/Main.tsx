import { useEffect, useState } from 'react';
import Seach from '../search/Seach';
import { STORAGE_KEY } from '../../model/consts';
import { useSelector, useDispatch } from 'react-redux';
import { setSearch } from '../../redux/slices/stateSearchSlice';
import { RootState } from '../../redux/store';
import Page from '@/page/Page';

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
interface MainProps {
  data: BeersArray[];
}

function Main({ data }: MainProps) {
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
        handleChange={handleChange}
        handleEnter={handleEnter}
        search={search}
      />
      <Page searchName={beer} arrResult={result} data={data} />
    </>
  );
}

export default Main;
