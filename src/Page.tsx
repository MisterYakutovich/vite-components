import Carts from './components/carts/Carts';
import Paginations from './components/paginatons/Paginations';
import { BeersArray } from './App';

export interface BeersSearch {
  name: string;
  image_url: string;
  id: string;
}
interface PageProps {
  handleClickStyle: (search: string) => void;
  isActive: boolean;
  items: BeersArray[] | undefined;
  searchName: BeersArray[];
  arrResult: BeersArray[];
}

function Page({
  handleClickStyle,
  isActive,
  items,
  searchName,
  arrResult,
}: PageProps) {
  return (
    <>
      <Paginations />
      <Carts
        searchName={searchName}
        arrResult={arrResult}
        handleClickStyle={handleClickStyle}
        isActive={isActive}
        items={items}
      />
    </>
  );
}
export default Page;
