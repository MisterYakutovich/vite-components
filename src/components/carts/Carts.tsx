import './Carts.css';
import CartItem from '../cartItem/CartItem';
import { NavLink } from 'react-router-dom';
import { BeersArray } from '../../App';
import { BeersSearch } from '../../Page';

interface BeerProps {
  searchName: BeersSearch[];
  arrResult: BeersSearch[];
  isActive: boolean;
  items: BeersArray[] | undefined;
  handleClickStyle: (search: string) => void;
}

function Cart({ searchName, arrResult, isActive, items }: BeerProps) {
  if (searchName.length === 0) {
    searchName.push(...arrResult);
  }

  return (
    <section className="section-main">
      <div className="container">
        {searchName.length == 0
          ? items?.map((i) => (
              <NavLink
                data-testid="link-cart"
                key={i.id}
                to={`ids=/${i.id}`}
                style={{ textDecoration: 'none' }}
                className={({ isActive, isPending }) =>
                  isPending ? 'pending' : isActive ? 'active-linc' : ''
                }
              >
                <CartItem key={i.id} i={i} isActive={isActive} />
              </NavLink>
            ))
          : searchName.map((i) => (
              <CartItem key={i.id} i={i} isActive={isActive} />
            ))}
      </div>
    </section>
  );
}
export default Cart;
