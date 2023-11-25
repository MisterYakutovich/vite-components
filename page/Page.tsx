
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import Carts from '@/components/carts/Carts';
import Paginations from '@/components/paginatons/Paginations';
import { useGetDataQuery } from '@/redux/services/apiBeers';
import { BeersArray } from '@/types/types';
import { setCurrentBeers } from '@/redux/slices/stateSearchSlice';
import { Loader } from '@/components/loading/Loader';

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
  //  const [searchTerm] = useState('');
  const arr = [];

  const { data, error, isLoading } = useGetDataQuery(2);

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
    // refetch();
    dispatch(setCurrentBeers(currentBeers));
  }, [currentBeers, dispatch]);

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <div>`Oups... something went wrong...`</div>;
  }

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
        itemsBeers={currentBeers}
      />
    </>
  );
}
export default Page;
