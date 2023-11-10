import { useContext } from 'react';
import './CartOnePage.css';
import { ThemeContext } from '../App';

interface CartOnePageProps {
  handleClose: () => void;
}

function CartsOnePage({ handleClose }: CartOnePageProps) {
  const itemsBeers = useContext(ThemeContext);

  return (
    <section className="section-cartsonepage">
      <div className="cartsonepage_container" onClick={handleClose}>
        {itemsBeers?.currentBeers.map((i) => (
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
