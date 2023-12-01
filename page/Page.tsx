import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import Carts from '@/components/carts/Carts';
import Paginations from '@/components/paginatons/Paginations';
import { BeersArray } from '@/types/types';
import { setCurrentBeers } from '@/redux/slices/stateSearchSlice';


export interface BeersSearch {
  name: string;
  image_url: string;
  id: string;
}
interface PageProps {
  searchName: BeersArray[];
  arrResult: BeersArray[];
  data: BeersArray[];
}

export default function Page({ searchName, arrResult, data }: PageProps) {
  const arr = [];

  arr.push(data);
  const itemsBeers = arr.flat();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [beersPerPage, setBeersPerPage] = useState<string>('10');
  const lastBeersIndex = currentPage * +beersPerPage;
  const firstBeersIndex = lastBeersIndex - +beersPerPage;
  const currentBeers = itemsBeers.slice(firstBeersIndex, lastBeersIndex);
  
  
  const nextPage = () => setCurrentPage((prev) => prev + 1);
  const prevPage = () => setCurrentPage((prev) => prev - 1);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setCurrentBeers(currentBeers));
  }, [currentBeers, dispatch]);

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
        itemsBeers={currentBeers}
      />
    </>
  );
}
