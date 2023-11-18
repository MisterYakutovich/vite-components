import Carts from './components/carts/Carts';
import Paginations from './components/paginatons/Paginations';
import { useGetDataQuery } from './redux/services/apiBeers';
import { useEffect, useState } from 'react';
import { BeersArray } from './types/types';

export interface BeersSearch {
  name: string;
  image_url: string;
  id: string;
}
interface PageProps {
  handleClickStyle: (search: string) => void;
  isActive: boolean;
  searchName: BeersArray[];
  arrResult: BeersArray[];
}

function Page({
  handleClickStyle,
  isActive,
  searchName,
  arrResult,
}: PageProps) {
  const [searchTerm] = useState('');
  const arr = [];
  const { data, error, isLoading, refetch } = useGetDataQuery(searchTerm);
  arr.push(data);
  const itemsBeers = arr.flat();

  const [currentPage, setCurrentPage] = useState<number>(1);
  const [beersPerPage, setBeersPerPage] = useState<string>('10');
  const lastBeersIndex = currentPage * +beersPerPage;
  const firstBeersIndex = lastBeersIndex - +beersPerPage;
  const currentBeers = itemsBeers.slice(firstBeersIndex, lastBeersIndex);

  const nextPage = () => setCurrentPage((prev) => prev + 1);
  const prevPage = () => setCurrentPage((prev) => prev - 1);

  useEffect(() => {
    // Обновление данных при изменении поиска или элементов на странице
    refetch();
  }, [searchTerm]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error!!!</div>;
  }

  console.log(itemsBeers);

  return (
    <>
      <Paginations
        setBeersPerPage={setBeersPerPage}
        currentPage={currentPage}
        beersPerPage={beersPerPage}
        itemsBeers={itemsBeers}
        nextPage={nextPage}
        prevPage={prevPage}
      />

      <Carts
        searchName={searchName}
        arrResult={arrResult}
        handleClickStyle={handleClickStyle}
        isActive={isActive}
        items={currentBeers}
      />
    </>
  );
}
export default Page;
