import { useContext } from 'react';
import Page from '../../Page';
import { ThemeContext } from '../../App';
import { IContext } from '../../App';

export interface BeersArray {
  name: string;
  image_url: string;
  id: string;
}

function Main() {
  const itemsBeers = useContext<null | IContext>(ThemeContext);

  return (
    <>
      <Page
        handleClickStyle={function (): void {
          throw new Error('Function not implemented.');
        }}
        isActive={false}
        items={itemsBeers?.currentBeers} // 10number
      />
    </>
  );
}
export default Main;
