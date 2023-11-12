import { createContext, useContext, useEffect, useState } from 'react';
import Page from '../../Page';
import { ThemeContext, IContext } from '../../App';
import Seach from '../search/Seach';

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
export const SearchContext = createContext<null | string>(null);

function Main() {
  const context = useContext<null | IContext>(ThemeContext);
  const [search, setSearch] = useState<string>('');
  const [, setShow] = useState<string>('index');
  const [beer, setBeer] = useState<BeersArray[]>([]);
  const [result, setResult] = useState<BeersArray[]>([]);
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
      <SearchContext.Provider value={search}>
        <Seach
          enterHandler={handleEnter}
          isActive={false}
          setSearch={setSearch}
        />
        <Page
          handleClickStyle={function (): void {
            throw new Error('Function not implemented.');
          }}
          isActive={false}
          items={context?.currentBeers}
          searchName={beer}
          arrResult={result}
        />
      </SearchContext.Provider>
    </>
  );
}
export default Main;
