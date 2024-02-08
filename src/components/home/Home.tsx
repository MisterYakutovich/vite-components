import { useEffect, useState } from 'react';
import Seach from '../search/Seach';
import { STORAGE_KEY } from '../../model/consts';
import Page from '@/src/page/Page';

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
  const searchKey = `${STORAGE_KEY}`;

  const [, setShow] = useState<string>('index');
  const [beer, setBeer] = useState<BeersArray[]>([]);
  const [result] = useState<BeersArray[]>([]);
  const [, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const localData = localStorage.getItem(searchKey);

    const result = localData ? JSON.parse(localData) : [];

    if (localData) {
      setBeer(result);
    }
  }, [searchKey]);

  const enterHandler = (search: string): void => {
    if (search.trim() === '') {
      setShow('index');
      setBeer([]);
      localStorage.removeItem(searchKey);
      return;
    }
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

  return (
    <>
      <Seach enterHandler={enterHandler} />
      <Page searchName={beer} arrResult={result} data={data} />
    </>
  );
}

export default Main;
