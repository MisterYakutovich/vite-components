import { RootState } from '../../redux/store';
import './CartOnePage.css';
import { useSelector } from 'react-redux';

interface CartOnePageProps {
  handleClose: () => void;
}

function CartsOnePage({ handleClose }: CartOnePageProps) {
  const currentBeers = useSelector(
    (state: RootState) => state.input.currentBeers
  );

  return (
    <section className="section-cartsonepage">
      <div className="cartsonepage_container" onClick={handleClose}>
        {currentBeers.map((i) => (
          <div key={i.id} className="cartsonepage_cart">
            <img
              className="cartsonepage_cart_img"
              key={i.image_url}
              src={i.image_url}
              alt=""
            ></img>
            <p key={i.name} className="cartsonepage_cart_title">
              {i.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
export default CartsOnePage;
