import { useState, useEffect } from 'react';
import Seach from './components/Seach';
import Carts from './components/Carts';

interface PageBeers {
  show: string;
  beer: string[];
  loading: boolean;
  result: string[];
  localData: string;
}
interface PageProps {
  handleClickStyle: (search: string) => void;
  isActive: boolean;
}

function Page({ handleClickStyle, isActive }: PageProps) {
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
      <Seach
        enterHandler={handleEnter}
        isActive={isActive}
      />
      <Carts
        searchName={beer}
        arrResult={result}
        handleClickStyle={handleClickStyle}
        isActive={isActive}
      />
    </>
  );
}
export default Page;
