import { BeersSearch } from '@/page/Page';
import styles from '../carts/Carts.module.css';

export interface ProfilesProps {
  i: BeersSearch;
  isActive: boolean;
}

function CartItem(props: ProfilesProps) {
  return (
    <div key={props.i.id} className={styles.card} data-testid="map">
      <img
        className={styles.card_img}
        key={props.i.image_url}
        src={props.i.image_url}
        alt=""
      ></img>

      <p key={props.i.name} className={styles.card_title}>
        {props.i.name}
      </p>
    </div>
  );
}
export default CartItem;
