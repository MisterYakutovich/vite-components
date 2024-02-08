import { useEffect } from 'react';
import { RootState } from '../../redux/store';
import styles from './CartOnePage.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentBeers } from '@/src/redux/slices/stateSearchSlice';


interface CartOnePageProps {
  handleGoBack: () => void;
}
const STORAGE_KEY = 'currentBeers'; // ключ localStorage
function CartsOnePage({ handleGoBack }: CartOnePageProps) {
  const currentBeers = useSelector(
    (state: RootState) => state.input.currentBeers
  );
  const dispatch = useDispatch();
  useEffect(() => {
    if (currentBeers.length > 0) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(currentBeers));
    }
  }, [currentBeers]);

  useEffect(() => {
    const storedBeers = localStorage.getItem(STORAGE_KEY);
    if (storedBeers) {
      const parsedBeers = JSON.parse(storedBeers);
      dispatch(setCurrentBeers(parsedBeers));
    }
  }, [dispatch]);

  console.log(currentBeers);
  return (
    <section className={styles.section_cartsonepage}>
      <div className={styles.cartsonepage_container} onClick={handleGoBack}>
        {currentBeers.map((i) => (
          <div key={i.id} className={styles.cartsonepage_cart}>
            <img
              className={styles.cartsonepage_cart_img}
              key={i.image_url}
              src={i.image_url}
              alt=" "
              width={100}
              height= {350}
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
