import { RootState } from '../../redux/store';
import styles from './CartOnePage.module.css';
import { useSelector } from 'react-redux';

function CartsOnePage() {
  const currentBeers = useSelector(
    (state: RootState) => state.input.currentBeers
  );

  return (
    <section className={styles.section_cartsonepage}>
      <div className={styles.cartsonepage_container}>
        {currentBeers.map((i) => (
          <div key={i.id} className={styles.cartsonepage_cart}>
            <img
              className={styles.cartsonepage_cart_img}
              key={i.image_url}
              src={i.image_url}
              alt=""
            ></img>
            <p key={i.name} className={styles.cartsonepage_cart_title}>
              {i.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
export default CartsOnePage;
