import CartItem from '../cartItem/CartItem';
import { BeersArray } from '../../types';
import styles from './Carts.module.css';
import Link from 'next/link';
import { BeersSearch } from '@/src/page/Page';

interface BeerProps {
  searchName: BeersSearch[];
  arrResult: BeersSearch[];
  itemsBeers: BeersArray[];
}

function Cart({ searchName, itemsBeers }: BeerProps) {
 
  return (
    <section className={styles.section_main}>
      <div className={styles.container}>
        {searchName.length == 0
          ? itemsBeers?.map((i: BeersSearch) => (
              <Link
                key={i.id}
                href={`/cartid/${i.id}`}
                style={{ textDecoration: 'none' }}
              >
                <CartItem key={i.id} i={i} />
              </Link>
            ))
          : searchName.map((i) => <CartItem key={i.id} i={i} />)}
      </div>
    </section>
  );
}
export default Cart;
