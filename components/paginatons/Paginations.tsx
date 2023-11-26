import styles from './Paginations.module.css';

import { BeersArray } from '../main/Main';

interface PaginationsProps {
  setBeersPerPage: (event: string) => void;
  currentPage: number;
  beersPerPage: string;
  itemsBeers: BeersArray[];
  nextPage: () => void;
  prevPage: () => void;
}

function Paginations({
  setBeersPerPage,
  currentPage,
  beersPerPage,
  itemsBeers,
  nextPage,
  prevPage,
}: PaginationsProps) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBeersPerPage(event.target.value);
  };
  return (
    <div className={styles.navigation}>
      <form>
        <input
          type="number"
          name="items"
          id={styles.items_per_page}
          min="1"
          max="80"
          value={beersPerPage}
          onChange={handleChange}
          // onKeyDown={handleEnter}
          placeholder="Number of cards per page"
        />
        <button type="submit" className={styles.change_button}>
          Change items number
        </button>
      </form>
      <button
        className={styles.button}
        onClick={prevPage}
        disabled={currentPage === 1}
      >
        <div className={styles.two}>
          <svg
            width="10"
            height="11"
            viewBox="0 0 10 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.98242 10.7852L0.949219 6.08789V4.98438L9.98242 0.287109V1.625L2.47266 5.53125L9.98242 9.44727V10.7852Z"
              fill="#CDCDCD"
            />
          </svg>
        </div>
      </button>

      <div className={styles.button_arrow_right_number}>
        <h4>{currentPage}</h4>
      </div>

      <button
        className={styles.button}
        onClick={nextPage}
        disabled={currentPage >= itemsBeers.length / +beersPerPage}
      >
        <div className={styles.two}>
          <svg
            width="10"
            height="11"
            viewBox="0 0 10 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.04102 6.08789L0.0078125 10.7852V9.44727L7.51758 5.53125L0.0078125 1.625V0.287109L9.04102 4.98438V6.08789Z"
              fill="#292929"
            />
          </svg>
        </div>
      </button>
    </div>
  );
}
export default Paginations;
