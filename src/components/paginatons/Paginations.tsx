import { useContext } from 'react';
import './Paginatins.css';
import { IContext, ThemeContext } from '../../App';

function Paginations() {
  const itemsBeers = useContext<null | IContext>(ThemeContext);
  console.log(typeof itemsBeers?.currentPage);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    itemsBeers?.setBeersPerPage(event.target.value);
  };
  return (
    <div className="navigation">
      <form>
        <input
          type="number"
          name="items"
          id="items-per-page"
          min="1"
          max="80"
          value={itemsBeers?.beersPerPage}
          onChange={handleChange}
          // onKeyDown={handleEnter}
        />
        <button type="submit" className="change_button">
          Change items number
        </button>
      </form>
      <button
        className="button"
        onClick={itemsBeers?.prevPage}
        disabled={itemsBeers?.currentPage === 1}
      >
        <div className="two">
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

      <div className="button_arrow_right_number">
        <h4>{itemsBeers?.currentPage}</h4>
      </div>

      <button
        className="button"
        onClick={itemsBeers?.nextPage}
        disabled={
          itemsBeers!.currentPage! >=
          itemsBeers!.itemsBeers.length! / +itemsBeers!.beersPerPage!
        }
      >
        <div className="two">
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
