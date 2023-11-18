import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './OnFullItem.css';
import Seach from '../search/Seach';
import CartsOnePage from '../cartOnePage/CartsOnePage';

interface BeersArray {
  name: string;
  image_url: string;
  id: string;
  loading: boolean;
}
[];

function OnFullItem() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [, setIsError] = useState<boolean>(false);
  const [item, setItems] = useState<BeersArray[]>([]);
  const [isActive] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(false);
  useEffect(() => {
    setLoading(true);
    fetch(`https://api.punkapi.com/v2/beers?ids=` + id)
      .then((res) => res.json())
      .then((result) => {
        setItems(result);
        if (result.length > 0) setLoading(false);
      })
      .catch((error) => {
        setIsError(true);
        alert(error);
      });
  }, [id]);
  const handleClose = () => {
    navigate(-1);
  };


  return (
    <section className="section-container">
      {loading && <span className="loader"></span>}
      <div className="container-onfullitem">
        <div onClick={handleClose} className="close_onfullitem">
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="0.5"
              y="0.5"
              width="31"
              height="31"
              rx="7.5"
              fill="white"
              stroke="#DBDBDB"
            />
            <path
              d="M20.0799 18.6155L17.6311 16.1667L20.0798 13.718C21.0241 12.7738 19.5596 11.3093 18.6154 12.2536L16.1667 14.7023L13.7179 12.2535C12.7738 11.3095 11.3095 12.7738 12.2535 13.7179L14.7023 16.1667L12.2536 18.6154C11.3093 19.5596 12.7738 21.0241 13.718 20.0798L16.1667 17.6311L18.6155 20.0799C19.5597 21.0241 21.0241 19.5597 20.0799 18.6155Z"
              fill="#B5B5B5"
            />
          </svg>{' '}
        </div>

        {!loading &&
          item.map((i) => (
            <div key={i.id} className="cart_onfullitem">
              <img
                className="cart_img_onfullitem"
                key={i.image_url}
                src={i.image_url}
                alt=""
              ></img>
              <p key={i.name} className="cart_title_onfullitem">
                {i.name}
              </p>
            </div>
          ))}
      </div>

      <Seach isActive={isActive}/>

      <CartsOnePage handleClose={handleClose} />
    </section>
  );
}
export default OnFullItem;
