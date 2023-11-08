import { useState, useEffect } from 'react';
import './Carts.css';
import CartItem from './CartItem';
import { NavLink, Outlet } from 'react-router-dom';

interface BeerProps {
  searchName: BeersSearch[];
  arrResult: BeersSearch[];
  isActive: boolean;
}
interface BeersArray {
  name: string;
  image_url: string;
  id: string;
}
export interface BeersSearch {
  name: string;
  image_url: string;
  id: string;
}

function Cart({
  searchName,
  arrResult,
  isActive,
}: BeerProps) {
  const [items, setItems] = useState<BeersArray[]>([]);

  // const [isLoaded,setIsLoaded]=useState(false)
  useEffect(() => {
    fetch('https://api.punkapi.com/v2/beers?page=2&per_page=10')
      .then((res) => res.json())
      .then((result) => setItems(result));
  }, []);

  if (searchName.length === 0) {
    searchName.push(...arrResult);
  }

  return (
    <section className="section-main">
      <div className="container">
        {searchName.length == 0
          ? items.map((i) => (
              <NavLink
                key={i.id}
                to={`ids=/${i.id}`}
                style={{ textDecoration: 'none' }}
                className={({ isActive, isPending }) =>
                  isPending ? 'pending' : isActive ? 'active-linc' : ''
                }
              >
                <CartItem
                  key={i.id}
                  i={i}
                  isActive={isActive}
                />
              </NavLink>
            ))
          : searchName.map((i) => (
              <CartItem
                key={i.id}
                i={i}
                isActive={isActive}
              />
            ))}
      </div>
      <Outlet context={{ hello: 'world' }} />
    </section>
  );
}
export default Cart;
