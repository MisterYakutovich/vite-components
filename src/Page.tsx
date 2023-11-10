import { useState, useEffect } from 'react';
import Seach from './components/Seach';
import Carts from './components/Carts';
import Paginations from './components/paginatons/Paginations';
import { BeersArray } from './App';

export interface PageBeers {
  show: string;
  beer: string[];
  loading: boolean;
  result: string[];
  localData: string;
}
export interface BeersSearch {
  name: string;
  image_url: string;
  id: string;
}
interface PageProps {
  handleClickStyle: (search: string) => void;
  isActive: boolean;
  items: BeersArray[] | undefined;
}

function Page({ handleClickStyle, isActive, items }: PageProps) {
  const [, setShow] = useState<string>('index');
  const [beer, setBeer] = useState<PageBeers[]>([]);
  const [result, setResult] = useState<PageBeers[]>([]);
  const [, setLoading] = useState<boolean>(true);
  useEffect(() => {
    const localData = localStorage.getItem('key');
    const result = localData ? JSON.parse(localData) : [];
    if (localData) {
      setResult(result);
    }
  }, []);
  const handleEnter = (search: string): void => {
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
        localStorage.setItem('key', JSON.stringify(data));
      });
  };

  return (
    <>
      <Seach enterHandler={handleEnter} isActive={isActive} />
      <Paginations />
      <Carts
        searchName={beer}
        arrResult={result}
        handleClickStyle={handleClickStyle}
        isActive={isActive}
        items={items}
      />
    </>
  );
}
export default Page;
