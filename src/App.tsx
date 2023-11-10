import { ReactNode, createContext, useEffect, useState } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import OnFullItem from './components/OnFullItem';
import Main from './components/main/Main';

export interface BeersArray {
  name: string;
  image_url: string;
  id: string;
}
export interface IContext {
  currentPage: number | undefined;
  itemsBeers: BeersArray[];
  beersPerPage: string | number | undefined;
  nextPage: () => void;
  prevPage: () => void;
  currentBeers: BeersArray[];
  setBeersPerPage: (page: string) => void;
}

export const ThemeContext = createContext<null | IContext>(null);
const router = createBrowserRouter([
  {
    path: `/`,
    element: <Main />,
  },
  {
    path: `ids=/:id`,
    element: <OnFullItem />,
  },
]);

function App(): ReactNode {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [beersPerPage, setBeersPerPage] = useState<string>('10');
  const [itemsBeers, setUser] = useState<BeersArray[]>([]);
  useEffect(() => {
    fetch('https://api.punkapi.com/v2/beers?page=2&per_page=80')
      .then((res) => res.json())
      .then((result) => setUser(result));
  }, []);

  const lastBeersIndex = currentPage * +beersPerPage;
  const firstBeersIndex = lastBeersIndex - +beersPerPage;
  const currentBeers = itemsBeers?.slice(firstBeersIndex, lastBeersIndex);
  const nextPage = () => setCurrentPage((prev) => prev + 1);
  const prevPage = () => setCurrentPage((prev) => prev - 1);
  return (
    <ThemeContext.Provider
      value={{
        itemsBeers,
        currentPage,
        beersPerPage,
        nextPage,
        prevPage,
        currentBeers,
        setBeersPerPage,
      }}
    >
      <RouterProvider router={router} />
    </ThemeContext.Provider>
  );
}

export default App;
