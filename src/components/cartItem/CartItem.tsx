import { BeersSearch } from '../../Page';

export interface ProfilesProps {
  i: BeersSearch;
  isActive: boolean;
}

function CartItem(props: ProfilesProps) {
  function handleClickStyle():
    | import('react').MouseEventHandler<HTMLImageElement>
    | undefined {
    throw new Error('Function not implemented.');
  }

  return (
    <div key={props.i.id} className="card" data-testid="map">
      <img
        className="card_img"
        key={props.i.image_url}
        src={props.i.image_url}
        alt=""
        onClick={handleClickStyle}
      ></img>

      <p key={props.i.name} className="card_title">
        {props.i.name}
      </p>
    </div>
  );
}
export default CartItem;
