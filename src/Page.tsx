import { useState, useEffect } from 'react';
import Seach from './components/Seach';
import Main from './components/Main';

interface PageBeers {
  show: string;
  beer: string[];
  loading: boolean;
  result: string[];
  localData: string;
}

function Page() {
  const [, setShow] = useState<string>('index');
  const [beer, setBeer] = useState<PageBeers[]>([]);
  const [result, setResult] = useState<PageBeers[]>([]);
  const [, setLoading] = useState<boolean>(true);

  useEffect(() => {
    let localData = localStorage.getItem('key');
    let result = localData ? JSON.parse(localData) : [];
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
      <Seach enterHandler={handleEnter} />
      <Main searchName={beer} arrResult={result} />
    </>
  );
}
export default Page;
