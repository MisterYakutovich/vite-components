import { useState, useEffect } from 'react';
import { BeersSearch } from './Carts';
import './CartOnePage.css';

function CartsOnePage() {
  const [temp, setTemp] = useState<BeersSearch[]>([]);
  useEffect(() => {
    fetch('https://api.punkapi.com/v2/beers?page=2&per_page=10')
      .then((res) => res.json())
      .then((result) => setTemp(result));
  }, []);

  return (
    <section className="section-cartsonepage">
      <div className="cartsonepage_container">
        {temp.map((i) => (
          <div key={i.id} className="cartsonepage_cart">
            <img
              className="cartsonepage_cart_img"
              key={i.image_url}
              src={i.image_url}
              alt=""
            ></img>
            <p className="cartsonepage_cart_title">{i.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
export default CartsOnePage;
