import { useState } from 'react';

import styles from './OnFullItem.module.css';
import Seach from '../../components/search/Seach';
import CartsOnePage from '../../components/cartOnePage/CartsOnePage';
import { useGetDataIdQuery } from '../../redux/services/apiBeers';
import { Loader } from '../../components/loading/Loader';
import { useRouter } from 'next/router';

interface BeersArray {
  description: string;
  name: string;
  image_url: string;
  id: string;
  loading: boolean;
}
[];
export async function getServerSideProps({ params }) {
  const res = await fetch(`https://api.punkapi.com/v2/beers?${params.id}`);
  const cart = await res.json();
  return { props: { cart } };
}

function OnFullItem({ cart }) {
 
 console.log(cart)
  const router = useRouter();
  const { id } = router.query;
  const { data } = useGetDataIdQuery(id);
  const handleGoBack = () => {
    router.back();
  };
  const [isActive] = useState<boolean>(true);
  const [isLoading] = useState(false);

  return (
    <section>
      {isLoading ? (
        <Loader />
      ) : (
        <div className={styles.container_onfullitem}>
          <div className={styles.close_onfullitem} onClick={handleGoBack}>
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

          {data?.map((i: BeersArray) => (
            <div key={i.id} className={styles.cart_onfullitem}>
              <img
                className={styles.cart_img_onfullitem}
                key={i.image_url}
                src={i.image_url}
                alt=""
              ></img>
              <h1 key={i.name} className={styles.cart_title_onfullitem}>
                {i.name}
              </h1>
              <p key={i.description} className={styles.cart_description}>
                {i.description}
              </p>
            </div>
          ))}
        </div>
      )}
      <Seach
        isActive={isActive}
        enterHandler={function (): void {
          throw new Error('Function not implemented.');
        }}
        search={''}
        handleChange={function (): void {
          throw new Error('Function not implemented.');
        }}
        handleEnter={function (): void {
          throw new Error('Function not implemented.');
        }}
      />

      <CartsOnePage handleGoBack={handleGoBack}/>
    </section>
  );
}
export default OnFullItem;
